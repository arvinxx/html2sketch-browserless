const { initNode2SketchSymbol } = require('./lib');
const { resolve } = require('path');
const { writeFileSync } = require('fs');

const htmlPath = resolve(__dirname, './test/html/techui');
const node2SketchSymbol = initNode2SketchSymbol(htmlPath, '/~demos/adf32d33', {
  headless: false,
  close: false,
});

function selector(dom) {
  return dom.getElementById('root-slave');
}

node2SketchSymbol(selector).then((json) => {
  if (json) {
    console.log('解析完成成功输出...');
    writeFileSync(resolve(__dirname, './motions.json'), JSON.stringify(json));
  }
  console.log(json);
});
