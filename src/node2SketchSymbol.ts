import puppeteer from 'puppeteer';
import express from 'express';
import { resolve } from 'path';
import fs from 'fs';

const hostname = '127.0.0.1'; //IP地址

// const port = (Math.random() * 10000).toFixed(0); //端口号
const port = 6783; //端口号

const baseURL = `http://${hostname}:${port}`;

export const initNode2SketchSymbol = (filePath: string, url: string) => {
  const app = express();
  const html = fs.readFileSync(filePath + '/index.html', 'utf8');

  let temp = html.replace('href="/umi', 'href="umi');
  temp = temp.replace('src="/umi', 'src="umi');

  fs.writeFileSync(filePath + '/index.html', temp);

  app.use(url, express.static(filePath)); //指定静态文件目录

  app.listen(port, hostname, () => {
    console.log(`启动Express服务在 ${baseURL}`);
  });

  return async (selector: (dom) => Element) => {
    const browser = await puppeteer.launch();

    try {
      const page = await browser.newPage();

      await page.goto(baseURL + url);
      await page.waitFor(3000);

      await page.addScriptTag({
        path: resolve(__dirname, '../dist/node2Symbol.bundle.js'),
      });

      const json = await page.evaluate(
        `node2Symbol.run(${selector}(document))`
      );
      await browser.close();

      fs.writeFileSync(filePath + '/index.html', html);
      return json;
    } catch (e) {
      await browser.close();
      throw e;
    }
  };
};
