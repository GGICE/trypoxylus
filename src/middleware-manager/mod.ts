import { Application } from "https://deno.land/x/oak/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";

export async function initMiddleware(app: Application, appPath: string) {
  try {
    const middlewarePath = path.join(appPath, "middleware");

    for (const file of Deno.readDirSync(middlewarePath)) {
      if (!file || !file.name) {
        return;
      }
      if (file.name.indexOf("ts") > -1) {
        const middleware = (await import(middlewarePath + "/" + file.name)).middleware;
        console.log('middleware', middleware);
        app.use(middleware);
      }
    }
  } catch (e) {
    console.error("Set middleware Fail!", e);
  }
}
