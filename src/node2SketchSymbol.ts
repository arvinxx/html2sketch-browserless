import puppeteer from 'puppeteer';
import express from 'express';
import { resolve } from 'path';
import fs from 'fs';

const hostname = '127.0.0.1'; //IP地址

// const port = (Math.random() * 10000).toFixed(0); //端口号
const port = 6783; //端口号

const baseURL = `http://${hostname}:${port}`;

declare global {
  interface Window {
    hituSelectedNodes: Element[];
  }
}

interface Options {
  headless?: boolean;
  close?: boolean;
  noSandbox?: boolean;
}
export const initNode2SketchSymbol = (
  filePath: string,
  url: string,
  { headless = true, close = true, noSandbox = true }: Options = {
    headless: true,
    close: true,
    noSandbox: true,
  }
) => {
  const app = express();
  const html = fs.readFileSync(filePath + '/index.html', 'utf8');

  let temp = html.replace('href="/umi', 'href="umi');
  temp = temp.replace('src="/umi', 'src="umi');

  fs.writeFileSync(filePath + '/index.html', temp);

  const staticURL = url.split('?')[0];

  const motions = url.split('?')[1]?.includes('capture');

  app.use(staticURL, express.static(filePath)); //指定静态文件目录

  app.listen(port, hostname, () => {
    console.log(`启动Express服务在 ${baseURL}`);
  });

  return async (selector?: (dom) => Element) => {
    const browser = await puppeteer.launch({
      headless,
      args: noSandbox
        ? ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
        : undefined,
    });
    const page = await browser.newPage();

    try {
      const resultURL = `${baseURL}${url}`;
      console.log('访问的网址为:', resultURL);
      await page.goto(resultURL);

      await page.addScriptTag({
        path: resolve(__dirname, '../dist/node2Symbol.bundle.js'),
      });
      // 添加监听器并完成解析
      // 同时将结果挂载在 hituSymbolData 上
      await page.evaluate(`
        window.addEventListener('message',  function (ev) {
          if (ev.data.type === 'dumi:capture-element') {
            const selector = ev.data.value; // => 会获得一个 CSS 选择器
            console.log(selector);
            const nodes = document.querySelector(selector);
            console.log(nodes)
            window.hituSymbolData = node2Symbol.run(nodes);
          }
        });
      `);

      // 如果有 motions
      if (motions) {
        await page.waitFor(1000);

        const json = await page.evaluate(`window.hituSymbolData`);

        if (close) {
          await browser.close();
        }
        fs.writeFileSync(filePath + '/index.html', html);
        return json;
      }

      if (selector) {
        const json = await page.evaluate(
          `node2Symbol.run(${selector}(document)).then(symbol=>symbol)`
        );

        if (close) {
          await browser.close();
        }
        fs.writeFileSync(filePath + '/index.html', html);
        return json;
      }

      const json = await page.evaluate(`node2Symbol.run()`);

      if (close) {
        await browser.close();
      }
      fs.writeFileSync(filePath + '/index.html', html);
      return json;
    } catch (e) {
      if (close) {
        await browser.close();
      }
      throw e;
    }
  };
};
