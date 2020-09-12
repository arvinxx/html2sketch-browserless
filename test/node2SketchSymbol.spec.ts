import { initNode2SketchSymbol } from '../lib';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

describe('node2SketchSymbol', function() {
  test('should work well', async () => {
    const node2SketchSymbol = initNode2SketchSymbol(
      resolve(__dirname, './html/motions'),
      '/~demos/02af570d',
      { headless: false }
    );
    const json = await node2SketchSymbol(function(doc) {
      return doc.querySelectorAll('[data-hitu-symbol]');
    });
    expect(json).toBe('1');
  }, 10000);

  test('motions', async () => {
    const node2SketchSymbol = initNode2SketchSymbol(
      resolve(__dirname, './html/techui'),
      '/~demos/56920700',
      { headless: false }
    );
    const json = await node2SketchSymbol();
    writeFileSync(resolve(__dirname, './motions.json'), JSON.stringify(json));
    expect(json).toBe('1');
  }, 10000);
});
