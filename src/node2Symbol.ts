import {nodeToSketchSymbol} from "html2sketch";

export function run(mainNode = document.body) {
  const page = nodeToSketchSymbol(mainNode);

  return page.toSketchJSON();

}
