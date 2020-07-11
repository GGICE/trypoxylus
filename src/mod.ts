import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { initModel } from "./model-manager/mod.ts";
import { initRouters } from "./router-manager/mod.ts";
import { getConfig } from "./utils/configer.ts";
import { initMiddleware } from './middleware-manager/mod.ts';

const app = new Application();
const router = new Router();
const defualtPort = 3000;

export async function start(appPath: string, port?: number) {
  (globalThis as any).APP_PATH = appPath;

  const configs = await getConfig();
  port = port || configs.port || defualtPort;

  await initMiddleware(app, appPath);

  app
    .use(oakCors(configs.corsOptions))
    .use(router.routes())
    .use(router.allowedMethods());

  initRouters(app, router, appPath);
  initModel(app, appPath);

  app.listen({ port: port! });

  console.log("Listening", port);
}