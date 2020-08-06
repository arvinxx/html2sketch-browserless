import { initNode2SketchSymbol } from '../lib';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

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

    writeFileSync('./x.json', JSON.stringify(json));
    expect(json).toBe('1');
  });
});
