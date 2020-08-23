import puppeteer from 'puppeteer';
import express from 'express';
import { resolve } from 'path';
import fs from 'fs';
import {
  AnyLayer,
  Group,
  RESIZING_CONSTRAINTS,
  SMART_LAYOUT,
  SymbolMaster,
} from 'html2sketch';

const hostname = '127.0.0.1'; //IP地址
const port = 6783; //端口号

const baseURL = `http://${hostname}:${port}`;

const init = (filePath: string, url: string) => {
  const app = express();
  const html = fs.readFileSync(filePath + '/index.html', 'utf8');

  let temp = html.replace('href="/umi', 'href="umi');
  temp = temp.replace('src="/umi', 'src="umi');

  fs.writeFileSync(filePath + '/index.html', temp);

  app.use(url, express.static(filePath)); //指定静态文件目录

  app.listen(port, hostname, () => {
    console.log(`启动Express服务在 ${baseURL}`);
  });
  return html;
};

interface Options {
  headless: boolean;
  close?: boolean;
  layouts?: {
    className: string;
    name: string;
    class?: string;
    resizing?: RESIZING_CONSTRAINTS[];
    groupLayout?: keyof typeof SMART_LAYOUT;
  }[];
}
export const initNode2SketchSymbol = (
  filePath: string,
  url: string,
  { headless, close, layouts }: Options = { headless: true, close: true }
) => {
  /**
   * 初始化本地服务器
   */
  const html = init(filePath, url);

  return async (selector: (dom) => Element, handleSymbol?) => {
    const browser = await puppeteer.launch({ headless });

    try {
      const page = await browser.newPage();

      await page.goto(baseURL + url);

      await page.addScriptTag({
        path: resolve(__dirname, '../dist/node2Symbol.bundle.js'),
      });

      const handle = function(symbol) {
        /**
         * 处理 layout
         */
        for (const layout of layouts) {
          const adjustGroupLayer = function(layer) {
            if (layer.layers) {
              layer.layers.forEach(adjustGroupLayer);
            }

            adjustLayout({
              layer,
              className: layout.className,
              class: layout.class,
              groupLayout: layout.groupLayout,
              name: layout.name,
              resizing: layout.resizing,
            });
          };
        }
        if (handleSymbol) {
          handleSymbol(symbol);
        }
      };

      const json = (await page.evaluate(
        `node2Symbol.run(${selector}(document),${handle})`
      )) as SymbolMaster;

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

const adjustLayout = function({
  layer,
  name,
  groupLayout,
  class: cls,
  resizing,
  className,
}: {
  layer: AnyLayer;
  name?: string;
  class?: string;
  className?: string;
  groupLayout: keyof typeof SMART_LAYOUT;
  resizing: RESIZING_CONSTRAINTS[];
}) {
  if (name && layer.name === name) {
    layer.setResizingConstraint(...resizing);
  }
  if (cls && layer.class === cls) {
    layer.setResizingConstraint(...resizing);
  }
  if (
    className &&
    typeof layer?.className === 'string' &&
    layer.className.includes(className)
  ) {
    layer.setResizingConstraint(...resizing);
  }

  if (groupLayout && layer instanceof Group) {
    layer.setGroupLayout(groupLayout);
  }
  if (layer.class === 'svg') {
    layer.setResizingConstraint(
      RESIZING_CONSTRAINTS.HEIGHT,
      RESIZING_CONSTRAINTS.WIDTH,
      RESIZING_CONSTRAINTS.RIGHT,
      RESIZING_CONSTRAINTS.TOP
    );
  }
};
