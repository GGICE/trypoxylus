import * as fs from 'fs';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as path from 'path';

export function initRouters(app: Koa, router: Router, appPath: string) {
  let routerPath = path.join(appPath, 'controller');

  fs.readdirSync(routerPath).forEach((file) => {
    if (~file.indexOf('js') || ~file.indexOf('ts')) {
      const ctrl = require(routerPath + '/' + file);
      if (ctrl.get) {
        router.get(file, ctrl.get);
      } 

      if (ctrl.post) {
        router.post(file, ctrl.post);
      }
    }
  });
}

