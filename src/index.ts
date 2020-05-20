import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as path from 'path';
import { initRouters } from './router-manager';

const app = new Koa();
const router = new Router();
const port = 3000;
const appPath = path.join(__dirname, '../app/');

app.use(router.routes())
  .use(router.allowedMethods());

initRouters(app, router, appPath);

app.listen(port);
