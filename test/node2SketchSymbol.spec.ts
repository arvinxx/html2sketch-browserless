import { initNode2SketchSymbol } from '../src/node2SketchSymbol';
import { resolve } from 'path';

describe('node2SketchSymbol', function() {
  it('should work well', async () => {
    const node2SketchSymbol = initNode2SketchSymbol(
      resolve(__dirname, './html/doc'),
      '/_embed_demos/eddb3b71'
    );
    const json = await node2SketchSymbol(
      (document) => document.getElementsByTagName('button')[0]
    );
    expect(json).toBe(1);
  });
});
