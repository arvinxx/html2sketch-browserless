import { nodeToSketchSymbol } from 'html2sketch';

export function run(node = document.body, handleSymbol) {
  if (!node) {
    throw Error('没有接收到元素,请检查输入');
  }
  const symbol = nodeToSketchSymbol({ node });

  handleSymbol(symbol);

  return symbol.toSketchJSON();
}
