import {nodeToSketchSymbol} from "html2sketch";

export function run(mainNode = document.body) {
  if (!mainNode) {
    throw Error('没有接收到元素,请检查输入')
  }
  const page = nodeToSketchSymbol(mainNode);

  return page.toSketchJSON();

}
