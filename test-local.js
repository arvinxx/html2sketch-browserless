const { initNode2SketchSymbol } = require('./lib');
const { resolve } = require('path');
const { writeFileSync } = require('fs');

const htmlPath = resolve(__dirname, './test/html/motions');
const node2SketchSymbol = initNode2SketchSymbol(
  htmlPath,
  '/~demos/02af570d?capture',
  {
    headless: false,
  }
);

node2SketchSymbol().then((json) => {
  if (json) {
    console.log('解析完成成功输出...');
    writeFileSync(resolve(__dirname, './motions.json'), JSON.stringify(json));
  }
  console.log(json);
});
