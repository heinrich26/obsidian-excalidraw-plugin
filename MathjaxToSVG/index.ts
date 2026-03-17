import { mathjax } from "mathjax-full/js/mathjax";
import { MathML } from 'mathjax-full/js/input/mathml.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { type LiteAdaptor, liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import { MathDocument } from "mathjax-full/js/core/MathDocument";
import { OptionList } from "mathjax-full/js/util/Options";
import { MathJaxObject } from "mathjax-full/js/components/startup";
import type { ParserConfiguration } from "mathjax-full/js/input/tex/Configuration";
import type { CHTML } from "mathjax-full/js/output/chtml";
import { HandlerType } from "mathjax-full/js/input/tex/MapHandler";
import { customAlphabet } from "nanoid";

declare global {
  interface Window {
    MathJax: {
      tex2mml: (tex: string, options: OptionList) => string;
    } & MathJaxObject
  }
}

type DataURL = string & { _brand: "DataURL" };
type FileId = string & { _brand: "FileId" };
const fileid = customAlphabet("1234567890abcdef", 40);

let adaptor: LiteAdaptor;
let html: MathDocument<any, unknown, unknown>;
let preamble: string;

function svgToBase64(svg: string): string {
  const cleanSvg = svg.replaceAll("&nbsp;", " ");
  
  // Convert the string to UTF-8 and handle non-Latin1 characters
  const encodedData = encodeURIComponent(cleanSvg)
    .replace(/%([0-9A-F]{2})/g,
      (_, p1) => String.fromCharCode(parseInt(p1, 16))
    );
    
  return `data:image/svg+xml;base64,${btoa(encodedData)}`;
}

function getMJXSubHandlers() {
  return (((window.MathJax.startup.output as unknown as CHTML<any, any, any>)
    .math.inputJax as any)
    .configuration as ParserConfiguration)
    .handlers;
}

function getCommandMaps(): [HandlerType, string, Map<string, any>][] {
  const keys: [HandlerType, string][] = [["macro", "new-Command"], ["environment", "new-Environment"]];
  const handlers = getMJXSubHandlers();

  return keys.map(([key, handler]) => [key, handler, new Map((
    (handlers
      .get(key)
      .retrieve(handler) as any).map as Map<string, any>)
  )]);
}

function restoreCommandMaps(maps: [HandlerType, string, Map<string, any>][]) {
  const handlers = getMJXSubHandlers();

  maps.forEach(([key, handler, map]) => {
    const targetMap = (handlers.get(key).retrieve(handler) as any).map as Map<string, any>;
    targetMap.clear();
    for (let [k, v] of map.entries()) {
      targetMap.set(k, v);
    }
  });
}

async function getImageSize(src: string): Promise<{ height: number; width: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ height: img.naturalHeight, width: img.naturalWidth });
    img.onerror = reject;
    img.src = src;
  });
}

export async function tex2dataURL(
  tex: string,
  scale: number = 4,
  plugin?: any
): Promise<{
  mimeType: string;
  fileId: FileId;
  dataURL: DataURL;
  created: number;
  size: { height: number; width: number };
}> {
  let inputMl: MathML<unknown, unknown, unknown>;
  let output: SVG<unknown, unknown, unknown>;

  if(!adaptor) {
    if (plugin) {
      // don't load a fallback preamble, because we're using the global latex preamble.
      const file = plugin.app.vault.getAbstractFileByPath(plugin.settings.latexPreambleLocation);
      preamble = file ? await plugin.app.vault.read(file) : null;
    }
    adaptor = liteAdaptor();
    RegisterHTMLHandler(adaptor);

    inputMl = new MathML();
    output = new SVG({ fontCache: "local" });
    html = mathjax.document("", { InputJax: inputMl, OutputJax: output });
  }

  try {
    /* reuse the MathJax from obsidian to make use of it's the configuration
       (inherits the preamble and any other loaded modules).
       We save the previous macros to avoid leaking the preamble into the global scope. */
    const macros = getCommandMaps();
    const node = html.convert(window.MathJax.tex2mml(
      preamble ? `${preamble}\n${tex}` : tex,
      { display: true, scale }
    ));
    restoreCommandMaps(macros);
    const svg = new DOMParser().parseFromString(adaptor.innerHTML(node), "image/svg+xml").firstChild as SVGSVGElement;

	//https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/2195
	//https://stackoverflow.com/a/77181931
	let styleNode = document.createElement('style');
    styleNode.setAttribute("type", "text/css");
    styleNode.appendChild(document.createTextNode(".mjx-solid { stroke-width: 80px; }"));
    svg.appendChild(styleNode);

    if (svg) {
      if(svg.width.baseVal.valueInSpecifiedUnits < 2) {
        svg.width.baseVal.valueAsString = `${(svg.width.baseVal.valueInSpecifiedUnits+1).toFixed(3)}ex`;
      }
      const img = svgToBase64(svg.outerHTML);
      svg.width.baseVal.valueAsString = (svg.width.baseVal.valueInSpecifiedUnits * 10).toFixed(3);
      svg.height.baseVal.valueAsString = (svg.height.baseVal.valueInSpecifiedUnits * 10).toFixed(3);
      return {
        mimeType: "image/svg+xml",
        fileId: fileid() as FileId,
        dataURL: img as DataURL,
        created: Date.now(),
        size: await getImageSize(img),
      };
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}

export function clearMathJaxVariables(): void {
  adaptor = null;
  html = null;
  preamble = null;
}