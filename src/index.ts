import { Application, Router } from "https://deno.land/x/oak/mod.ts";
// import { initModel } from './model-manager';
// import { initRouters } from './router-manager';

const app = new Application();
const router = new Router();
const defualtPort = 3000;

export function start(appPath?: string, port?: number) {
  port = port || defualtPort;
  // (global as any).APP_PATH  = appPath;
  app.use(router.routes())
    .use(router.allowedMethods());

  // initRouters(app, router, appPath);
  // initModel(app);
  app.listen({ port });
  console.log('Listening', port);
}