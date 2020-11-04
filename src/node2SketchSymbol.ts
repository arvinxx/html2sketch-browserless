import puppeteer from 'puppeteer';
import { resolve } from 'path';
import setupHttpServer from './setupHttpServer';

declare global {
  interface Window {
    hituSelectedNodes: Element[];
  }
}

interface Options {
  headless?: boolean;
  close?: boolean;
  noSandbox?: boolean;
  width?: number;
  port?: number;
  hostname?: string;
}
// 初始化 node2sketch 服务
export const initNode2SketchSymbol = (
  filePath: string,
  url: string,
  {
    headless = true,
    close = true,
    noSandbox = true,
    width = 1184,
    port = 6783,
    hostname = 'localhost',
  }: Options = {
    headless: true,
    close: true,
    noSandbox: true,
    width: 1184,
    port: 6783,
    hostname: 'localhost',
  }
) => {
  // 启动 HTTP 服务器并拿到基础 url
  const { baseURL } = setupHttpServer(filePath, port, hostname);

  return async (selector?: (dom) => Element) => {
    const browser = await puppeteer.launch({
      headless,
      args: noSandbox
        ? ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
        : undefined,
    });
    const page = await browser.newPage();

    await page.setViewport({ height: 900, width });

    const handleJSON = async (json) => {
      const imageList = [];
      let index: string = '';

      const findImageIndex = (layer) => {
        if (layer.layers && layer.layers.length > 0) {
          return layer.layers.forEach((l, j) => {
            const newIndex = `.layers[${j.toString()}]`;
            index += newIndex; // 定位到相应的位置
            findImageIndex(l);
            index = index.slice(0, index.length - newIndex.length); // 处理完毕后删除
          });
        }

        if (layer._class === 'bitmap') {
          imageList.push(index + '.image');
        }
      };
      // @ts-ignore
      json?.layers.forEach((layer, i) => {
        index = `layers[${i.toString()}]`;
        findImageIndex(layer);
      });

      if (close) {
        await browser.close();
      }
      return { imageList, data: json };
    };

    try {
      const resultURL = `${baseURL}${url}`;

      const motions = url.split('?')[1]?.includes('capture');

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

      await page.waitFor(5000);

      // 如果有 motions
      if (motions) {
        await page.waitFor(1000);

        const json = await page.evaluate(`window.hituSymbolData`);

        return await handleJSON(json);
      }

      // 外部指定选择器
      if (selector) {
        const json = await page.evaluate(
          `node2Symbol.run(${selector}(document)).then(symbol=>symbol)`
        );
        return await handleJSON(json);
      }

      const json = await page.evaluate(`node2Symbol.run()`);
      return await handleJSON(json);
    } catch (e) {
      if (close) {
        await browser.close();
      }
      throw e;
    }
  };
};
