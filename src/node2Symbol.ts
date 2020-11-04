import { nodeToSketchSymbol } from 'html2sketch';

export const run = async (node = document.body) => {
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

    const res = [];
    for (let i = 0; i < elementList.length; i++) {
      const el = elementList[i];
      const symbol = await nodeToSketchSymbol(el);
      res.push(symbol.toSketchJSON());
    }

    return res.filter((n) => n);
  } else {
    const page = await nodeToSketchSymbol(node);

    return page.toSketchJSON();
  }
};
