import * as fs from 'fs';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as path from 'path';

export function initRouters(app: Koa, router: Router, appPath: string) {
  let routerPath = path.join(appPath, 'controller');

  fs.readdirSync(routerPath).forEach((file) => {
    if (~file.indexOf('js') || ~file.indexOf('ts')) {
      const ctrl = require(routerPath + '/' + file).default;

      if (!ctrl.router) {
        throw new Error('Not set router!');
      }

      if (ctrl.get) {
        router.get(ctrl.router, ctrl.get);
      } 

      if (ctrl.post) {
        router.post(ctrl.router, ctrl.post);
      }
    }
  });
}

