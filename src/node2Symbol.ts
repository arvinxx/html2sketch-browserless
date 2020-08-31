import { nodeToSketchSymbol } from 'html2sketch';

export function run(node = document.body) {
  if (!node) {
    throw Error('没有接收到元素,请检查输入');
  }

  let elementList = [];

  if (node instanceof NodeList) {
    node.forEach((n) => {
      if (n.nodeType === Node.ELEMENT_NODE) {
        elementList.push(n);
      }
    });

    return elementList
      .map((node) => {
        return nodeToSketchSymbol(node).toSketchJSON();
      })
      .filter((n) => n);
  } else {
    const page = nodeToSketchSymbol(node);

    return page.toSketchJSON();
  }
}
