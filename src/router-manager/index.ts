import { CtrlModule } from 'common/controller';
import * as fs from 'fs';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as path from 'path';

export function initRouters(app: Koa, router: Router, appPath: string) {
  let routerPath = path.join(appPath, 'controller');

  fs.readdirSync(routerPath).forEach((file) => {
    if (~file.indexOf('js') || ~file.indexOf('ts')) {
      const ctrl: CtrlModule = require(routerPath + '/' + file);

      if (!ctrl.router) {
        throw new Error('Not set router!');
      }

      if (ctrl.get) {
        router.get(ctrl.router, ctrl.get);
      } 

      if (ctrl.post) {
        router.post(ctrl.router, ctrl.post);
      }

      if (ctrl.put) {
        router.put(ctrl.router, ctrl.post);
      }

      if (ctrl.delete) {
        router.delete(ctrl.router, ctrl.post);
      }

      if (ctrl.head) {
        router.head(ctrl.router, ctrl.post);
      }

      if (ctrl.options) {
        router.options(ctrl.router, ctrl.post);
      }

      if (ctrl.patch) {
        router.patch(ctrl.router, ctrl.post);
      }

      if (ctrl.all) {
        router.all(ctrl.router, ctrl.post);
      }

      if (ctrl.link) {
        router.link(ctrl.router, ctrl.post);
      }

      if (ctrl.unlink) {
        router.unlink(ctrl.router, ctrl.post);
      }

    }
  });
}

