import { initNode2SketchSymbol } from '../lib';
import { resolve } from 'path';
import { SymbolMaster } from 'html2sketch';

describe('node2SketchSymbol', function() {
  it('should work well', async () => {
    const node2SketchSymbol = initNode2SketchSymbol(
      resolve(__dirname, './html/doc'),
      '/_embed_demos/eddb3b71'
    );
    const json = await node2SketchSymbol(function(doc) {
      return doc.querySelectorAll('[data-hitu-symbol]');
    });
    expect(json).toBe('1');
  });
  it('能显示浏览器', async () => {
    const node2SketchSymbol = initNode2SketchSymbol(
      resolve(__dirname, './html/doc'),
      '/~demos/2f932600',
      {
        headless: false,
      }
    );
    const json = await node2SketchSymbol(function(doc) {
      console.log(doc.querySelectorAll('[data-hitu-symbol]'));
      return doc.querySelectorAll('[data-hitu-symbol]');
    });
    expect(json).toBe('1');
  });
  it('带 layout 解析', async () => {
    const node2SketchSymbol = initNode2SketchSymbol(
      resolve(__dirname, './html/layout'),
      '/~demos/02af570d',
      {
        headless: false,
        layouts: [],
      }
    );
    const selector = function(document) {
      return document.getElementsByTagName('button')[0];
    };
    const handleSymbol = function(symbol: SymbolMaster) {
      symbol.name = '213';
    };
    const json = await node2SketchSymbol(selector, handleSymbol);
    expect(json).toBe(result);
  });
});
