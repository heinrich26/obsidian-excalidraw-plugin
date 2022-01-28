export const EXCALIDRAW_AUTOMATE_INFO = [
  {
    field: "plugin",
    desc: "The ExcalidrawPlugin object",
    after: "",
    alt: true,
  },
  {
    field: "elementsDict",
    desc: "The {} dictionary object, contains the ExcalidrawElements currently edited in Automate indexed by el.id",
    after: '[""]',
    alt: true,
  },
  {
    field: "imagesDict",
    desc: "the images files including DataURL, indexed by fileId",
    after: '[""]',
    alt: true,
  },
  {
    field: "style.strokeColor",
    desc: "[string]\n\nvalid css color. See https://www.w3schools.com/colors/default.asp for more.",
    after: "",
    alt: true,
  },
  {
    field: "style.backgroundColor",
    desc: "[string]\n\nvalid css color. See https://www.w3schools.com/colors/default.asp for more.",
    after: "",
    alt: true,
  },
  {
    field: "style.angle",
    desc: "[number]\n\nrotation of the object in radian",
    after: "",
    alt: true,
  },
  {
    field: "style.fillStyle",
    desc: "[string]\n\n'hachure' | 'cross-hatch' | 'solid'",
    after: "",
    alt: true,
  },
  {
    field: "style.strokeWidth",
    desc: "[number]",
    after: "",
    alt: true,
  },
  {
    field: "style.strokeStyle",
    desc: "[string]\n\n'solid' | 'dashed' | 'dotted'",
    after: "",
    alt: true,
  },
  {
    field: "style.roughness",
    desc: "[number]",
    after: "",
    alt: true,
  },
  {
    field: "style.opacity",
    desc: "[number]",
    after: "",
    alt: true,
  },
  {
    field: "style.strokeSharpness",
    desc: "[string]\n\n'round' | 'sharp'",
    after: "",
    alt: true,
  },
  {
    field: "style.fontFamily",
    desc: "[number]\n\n1: Virgil, 2:Helvetica, 3:Cascadia, 4:LocalFont",
    after: "",
    alt: true,
  },
  {
    field: "style.fontSize",
    desc: "[number]",
    after: "",
    alt: true,
  },
  {
    field: "style.textAlign",
    desc: "[string]\n\n'left' | 'right' | 'center'",
    after: "",
    alt: true,
  },
  {
    field: "style.verticalAlign",
    desc: "[string]\n\nfor future use, has no effect currently; 'top' | 'bottom' | 'middle'",
    after: "",
    alt: true,
  },
  {
    field: "style.startArrowHead",
    desc: "[string]\n\n'triangle' | 'dot' | 'arrow' | 'bar' | null",
    after: "",
    alt: true,
  },
  {
    field: "style.endArrowHead",
    desc: "[string]\n\n'triangle' | 'dot' | 'arrow' | 'bar' | null",
    after: "",
    alt: true,
  },
  {
    field: "canvas.theme",
    desc: "[string]\n\n'dark' | 'light'",
    after: "",
    alt: true,
  },
  {
    field: "canvas.viewBackgroundColor",
    desc: "[string]\n\nA valid css color.\nSee https://www.w3schools.com/colors/default.asp for more.",
    after: "",
    alt: true,
  },
  {
    field: "canvas.gridSize",
    desc: "[number]",
    after: "",
    alt: true,
  },
  {
    field: "addToGroup",
    desc: "addToGroup(objectIds: []): string;",
    after: "",
    alt: true,
  },
  {
    field: "toCliboard",
    desc: "toClipboard(templatePath?: string): void;\n\nCopies current elements using template to clipboard, ready to be pasted into an excalidraw canvas",
    after: "",
    alt: true,
  },
  {
    field: "getElements",
    desc: "getElements(): ExcalidrawElement[];\n\nGet all elements from ExcalidrawAutomate elementsDict",
    after: "",
    alt: true,
  },
  { 
    field: "create",
    desc: 'create(params?: {\n  filename?: string;\n  foldername?: string;\n  templatePath?: string;\n  onNewPane?: boolean;\n  frontmatterKeys?: {\n    "excalidraw-plugin"?: "raw" | "parsed";\n    "excalidraw-link-prefix"?: string;\n    "excalidraw-link-brackets"?: boolean;\n    "excalidraw-url-prefix"?: string;\n  };\n}): Promise<string>;\n\nCreate a drawing and save it to filename.\nIf filename is null: default filename as defined in Excalidraw settings.\nIf folder is null: default folder as defined in Excalidraw settings\n',
    after: "",
    alt: true,
  },
  {
    field: "createSVG",
    desc: "createSVG(\n  templatePath?: string,\n  embedFont?: boolean,\n  exportSettings?: ExportSettings,\n  loader?: EmbeddedFilesLoader,\n  theme?: string,\n): Promise<SVGSVGElement>;\n\nUse ExcalidrawAutomate.getExportSettings(boolean,boolean) to create an ExportSettings object.\nUse ExcalidrawAutomate.getEmbeddedFilesLoader(boolean?) to create an EmbeddedFilesLoader object.",
    after: "",
    alt: true,
  },
  {
    field: "createPNG",
    desc: "createPNG(\n  templatePath?: string,\n  scale?: number,\n  exportSettings?: ExportSettings,\n  loader?: EmbeddedFilesLoader,\n  theme?: string,\n): Promise<any>;\n\nUse ExcalidrawAutomate.getExportSettings(boolean,boolean) to create an ExportSettings object.\nUse ExcalidrawAutomate.getEmbeddedFilesLoader(boolean?) to create an EmbeddedFilesLoader object.",
    after: "",
    alt: true,
  },
  {
    field: "wrapText",
    desc: "wrapText(text: string, lineLen: number): string;",
    after: "",
    alt: true,
  },
  {
    field: "addRect",
    desc: "addRect(topX: number, topY: number, width: number, height: number): string;",
    after: "",
    alt: true,
  },
  {
    field: "addDiamond",
    desc: "addDiamond(topX: number, topY: number, width: number, height: number): string;",
    after: "",
    alt: true,
  },
  {
    field: "addEllipse",
    desc: "addEllipse(topX: number, topY: number, width: number, height: number): string;",
    after: "",
    alt: true,
  },
  {
    field: "addBlob",
    desc: "addBlob(topX: number, topY: number, width: number, height: number): string;",
    after: "",
    alt: true,
  },
  {
    field: "addText",
    desc: 'addText(\n  topX: number,\n  topY: number,\n  text: string,\n  formatting?: {\n    wrapAt?: number;\n    width?: number;\n    height?: number;\n    textAlign?: string;\n    box?: boolean | "box" | "blob" | "ellipse" | "diamond";\n    boxPadding?: number;\n  },\n  id?: string,\n): string;\n\nif box is !null, then text will be boxed\nThe function returns the id of the TextElement. If the text element is boxed i.e. it is a sticky note, then the id of the container object',
    after: "",
    alt: true,
  },
  {
    field: "addLine",
    desc: "addLine(points: [[x: number, y: number]]): string;",
    after: "",
    alt: true,
  },
  {
    field: "addArrow",
    desc: "addArrow(\n  points: [[x: number, y: number]],\n  formatting?: {\n    startArrowHead?: string;\n    endArrowHead?: string;\n    startObjectId?: string;\n    endObjectId?: string;\n  },\n): string;",
    after: "",
    alt: true,
  },
  {
    field: "addImage",
    desc: "addImage(topX: number, topY: number, imageFile: TFile): Promise<string>;",
    after: "",
    alt: true,
  },
  {
    field: "addLaTex",
    desc: "addLaTex(topX: number, topY: number, tex: string): Promise<string>;",
    after: "",
    alt: true,
  },
  {
    field: "connectObjects",
    desc: 'connectObjects(\n  objectA: string,\n  connectionA: ConnectionPoint,\n  objectB: string,\n  connectionB: ConnectionPoint,\n  formatting?: {\n    numberOfPoints?: number;\n    startArrowHead?: string;\n    endArrowHead?: string;\n    padding?: number;\n  },\n): void;\n\ntype ConnectionPoint = "top" | "bottom" | "left" | "right" | null\nWhen null is passed as ConnectionPoint then Excalidraw will automatically decide\nnumberOfPoints is the number of points on the line. Default is 0 i.e. line will only have a start and end point.\nArrowHead: "triangle"|"dot"|"arrow"|"bar"|null',
    after: "",
    alt: true,
  },
  {
    field: "clear",
    desc: "clear(): void;\n\nClears elementsDict and imagesDict only",
    after: "",
    alt: true,
  },
  {
    field: "reset",
    desc: "reset(): void;\n\nclear() + reset all style values to default",
    after: "",
    alt: true,
  },
  {
    field: "isExcalidrawFile",
    desc: "isExcalidrawFile(f: TFile): boolean;\n\nReturns true if MD file is an Excalidraw file",
    after: "",
    alt: true,
  },
  {
    field: "targetView",
    desc: "targetView: ExcalidrawView;\n\nThe Obsidian view currently edited",
    after: "",
    alt: true,
  },
  {
    field: "setView",
    desc: 'setView(view: ExcalidrawView | "first" | "active"): ExcalidrawView;',
    after: "",
    alt: true,
  },
  {
    field: "getExcalidrawAPI",
    desc: "getExcalidrawAPI(): any;\n\nhttps://github.com/excalidraw/excalidraw/tree/master/src/packages/excalidraw#ref",
    after: "",
    alt: true,
  },
  {
    field: "getViewElements",
    desc: "getViewElements(): ExcalidrawElement[];\n\nget elements in View",
    after: "",
    alt: true,
  },
  {
    field: "deleteViewElements",
    desc: "deleteViewElements(el: ExcalidrawElement[]): boolean;",
    after: "",
    alt: true,
  },
  {
    field: "getViewSelectedElement",
    desc: "getViewSelectedElement(): ExcalidrawElement;\n\nget the selected element in the view, if more are selected, get the first",
    after: "",
    alt: true,
  },
  {
    field: "getViewSelectedElements",
    desc: "getViewSelectedElements(): ExcalidrawElement[];",
    after: "",
    alt: true,
  },
  {
    field: "getViewFileForImageElement",
    desc: "getViewFileForImageElement(el: ExcalidrawElement): TFile | null;\n\nReturns the TFile file handle for the image element",
    after: "",
    alt: true,
  },
  {
    field: "copyViewElementsToEAforEditing",
    desc: "copyViewElementsToEAforEditing(elements: ExcalidrawElement[]): void;\n\nCopies elements from view to elementsDict for editing",
    after: "",
    alt: true,
  },
  {
    field: "viewToggleFullScreen",
    desc: "viewToggleFullScreen(forceViewMode?: boolean): void;",
    after: "",
    alt: true,
  },
  {
    field: "connectObjectWithViewSelectedElement",
    desc: 'connectObjectWithViewSelectedElement(\n  objectA: string,\n  connectionA: ConnectionPoint,\n  connectionB: ConnectionPoint,\n  formatting?: {\n    numberOfPoints?: number;\n    startArrowHead?: string;\n    endArrowHead?: string;\n    padding?: number;\n  },\n): boolean;\n\nConnect an object to the selected element in the view\nSee tooltip for connectObjects for details',
    after: "",
    alt: true,
  },
  {
    field: "addElementsToView",
    desc: "addElementsToView(\n  repositionToCursor?: boolean,\n  save?: boolean,\n  newElementsOnTop?: boolean,\n): Promise<boolean>;\n\nAdds elements from elementsDict to the current view\nrepositionToCursor: default is false\nsave: default is true\nnewElementsOnTop: default is false, i.e. the new elements get to the bottom of the stack\nnewElementsOnTop controls whether elements created with ExcalidrawAutomate are added at the bottom of the stack or the top of the stack of elements already in the view\nNote that elements copied to the view with copyViewElementsToEAforEditing retain their position in the stack of elements in the view even if modified using EA",
    after: "",
    alt: true,
  },
  {
    field: "onDropHook",
    desc: 'onDropHook(data: {\n  ea: ExcalidrawAutomate;\n  event: React.DragEvent<HTMLDivElement>;\n  draggable: any;\n  type: "file" | "text" | "unknown";\n  payload: {\n    files: TFile[];\n    text: string; //string\n  };\n  excalidrawFile: TFile;\n  view: ExcalidrawView;\n  pointerPosition: { x: number; y: number };\n}): boolean;\n\nIf set Excalidraw will call this function onDrop events.\nA return of true will stop the default onDrop processing in Excalidraw.\n\ndraggable is the Obsidian draggable object\nfiles is the array of dropped files\nexcalidrawFile is the file receiving the drop event\nview is the excalidraw view receiving the drop.\npointerPosition is the pointer position on canvas at the time of drop.',
    after: "",
    alt: true,
  },
  {
    field: "mostRecentMarkdownSVG",
    desc: "mostRecentMarkdownSVG: SVGSVGElement;\n\nMarkdown renderer will drop a copy of the most recent SVG here for debugging purposes",
    after: "",
    alt: true,
  },
  {
    field: "getEmbeddedFilesLoader",
    desc: "getEmbeddedFilesLoader(isDark?: boolean): EmbeddedFilesLoader;\n\nutility function to generate EmbeddedFilesLoader object",
    after: "",
    alt: true,
  },
  {
    field: "getExportSettings",
    desc: "getExportSettings(\n  withBackground: boolean,\n  withTheme: boolean,\n): ExportSettings;\n\nutility function to generate ExportSettings object",
    after: "",
    alt: true,
  },
  {
    field: "getBoundingBox",
    desc: "getBoundingBox(elements: ExcalidrawElement[]): {\n  topX: number;\n  topY: number;\n  width: number;\n  height: number;\n};\n\nGets the bounding box of elements. The bounding box is the box encapsulating all of the elements completely.",
    after: "",
    alt: true,
  },
  {
    field: "getMaximumGroups",
    desc: "getMaximumGroups(elements: ExcalidrawElement[]): ExcalidrawElement[][];\n\nElements grouped by the highest level groups",
    after: "",
    alt: true,
  },
  {
    field: "getLargestElement",
    desc: "getLargestElement(elements: ExcalidrawElement[]): ExcalidrawElement;\n\nGets the largest element from a group. useful when a text element is grouped with a box, and you want to connect an arrow to the box",
    after: "",
    alt: true,
  },
  {
    field: "intersectElementWithLine",
    desc: "intersectElementWithLine(\n  element: ExcalidrawBindableElement,\n  a: readonly [number, number],\n  b: readonly [number, number],\n  gap?: number,\n): Point[];\n\nIf gap is given, the element is inflated by this value.\nReturns 2 or 0 intersection points between line going through `a` and `b` and the `element`, in ascending order of distance from `a`.",
    after: "",
    alt: true,
  },
  {
    field: "getLargestElement",
    desc: "getLargestElement(elements: ExcalidrawElement[]): ExcalidrawElement;\n\nGets the largest element from a group. useful when a text element is grouped with a box, and you want to connect an arrow to the box",
    after: "",
    alt: true,
  },
  {
    field: "activeScript",
    desc: "activeScript: string;\n\nMandatory to set before calling the get and set ScriptSettings functions. Set automatically by the ScriptEngine\nSee for more details: https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html",
    after: "",
    alt: true,
  },
  {
    field: "getScriptSettings",
    desc: "getScriptSettings(): {};\n\nReturns script settings. Saves settings in plugin settings, under the activeScript key. See for more details: https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html",
    after: "",
    alt: true,
  },
  {
    field: "setScriptSettings",
    desc: "setScriptSettings(settings: any): Promise<void>;\n\nSets script settings.\nSee for more details: https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html",
    after: "",
    alt: true,
  },
  {
    field: "openFileInNewOrAdjacentLeaf",
    desc: "openFileInNewOrAdjacentLeaf(file: TFile): WorkspaceLeaf;\n\nOpen a file in a new workspaceleaf or reuse an existing adjacent leaf depending on Excalidraw Plugin Settings",
    after: "",
    alt: true,
  },
  {
    field: "measureText",
    desc: "measureText(text: string): { width: number; height: number };\n\nMeasures text size based on current style settings",
    after: "",
    alt: true,
  },
  {
    field: "verifyMinimumPluginVersion",
    desc: 'verifyMinimumPluginVersion(requiredVersion: string): boolean;\n\nreturns true if plugin version is >= than required\nrecommended use:\nif(!ea.verifyMinimumPluginVersion || !ea.verifyMinimumPluginVersion("1.5.20")) {new Notice("message");return;}',
    after: "",
    alt: true,
  },
];