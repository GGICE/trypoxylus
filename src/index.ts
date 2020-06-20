import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { initModel } from "./model-manager/index.ts";
import { initRouters } from "./router-manager/index.ts";

const app = new Application();
const router = new Router();
const defualtPort = 3000;

export async function start(appPath: string, port?: number) {
  port = port || defualtPort;
  (globalThis as any).APP_PATH = appPath;
  app.use(router.routes())
    .use(router.allowedMethods());

  initRouters(app, router, appPath);
  initModel(app, appPath);
  app.listen({ port });
  console.log("Listening", port);
}
