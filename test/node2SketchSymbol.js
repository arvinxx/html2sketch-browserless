const { resolve } = require('path');
const x = require(resolve(__dirname, '../lib'));

const fn = async () => {
  const node2SketchSymbol = x.initNode2SketchSymbol(
    resolve(__dirname, './html/doc'),
    '/_embed_demos/eddb3b71',
    { headless: false }
  );

  function func(document) {
    return document.getElementsByTagName('button')[0];
  }
  const json = await node2SketchSymbol(func);
  console.log(json);
};

fn();
