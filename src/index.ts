import Koa from 'koa';
import Router from 'koa-router';
import { initRouters } from './router-manager';

const app = new Koa();
const router = new Router();
const defualtPort = 3000;

export function start(appPath: string, port?: number) {
  app.use(router.routes())
    .use(router.allowedMethods());

  initRouters(app, router, appPath);
  app.listen(port || defualtPort);
}