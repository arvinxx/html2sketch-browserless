import express from 'express';
import { join } from 'path';

/**
 * 启动本地 http 服务器
 * @param filePath
 * @param port
 * @param hostname
 */
const setupServer = (
  filePath: string,
  port: number,
  hostname = 'localhost'
) => {
  const app = express();

  // 处理静态资源
  app.use(express.static(filePath));

  // 解决 打开二级路由后显示 can GET /~demos/xxxx 的问题
  // 路由需要由前端控制,所以需要将所有请求重定向回 index.html
  // 相关 issue:
  // https://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html
  // https://stackoverflow.com/questions/35929820/minimum-nodejs-server-setup-needed-for-react-using-react-router-and-browserhisto
  app.get('*', (_req, res) => {
    res.sendFile(join(filePath, 'index.html'));
  });

  const baseURL = `http://${hostname}:${port}`;

  app.listen(port, hostname, () => {
    console.log(`启动Express服务在 ${baseURL}`);
  });

  return { baseURL };
};

export default setupServer;
