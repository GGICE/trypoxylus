import { Application, oakCors, Router } from "./deps.ts";
import { initModel } from "./model-manager/mod.ts";
import { initRouters } from "./router-manager/mod.ts";
import { getConfig } from "./utils/configer.ts";
import { initMiddleware } from "./middleware-manager/mod.ts";

declare global {
  interface Window {
    APP_PATH: string;
  }
}

const app = new Application();
const router = new Router();
const defualtPort = 3000;

export async function start(appPath: string, port?: number) {
  window.APP_PATH = appPath;

  const configs = await getConfig();
  port = port || configs.port || defualtPort;

  initRouters(app, router, appPath);
  initModel(app, appPath);

  await initMiddleware(app, appPath);
  app.use(oakCors(configs.corsOptions));
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.listen({ port: port! });
  console.log("🎉 Listening", port);
}
