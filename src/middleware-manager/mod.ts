import { Application } from "https://deno.land/x/oak/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import { isIgnoreError } from "../utils/mod.ts";

export async function initMiddleware(app: Application, appPath: string) {
  try {
    const middlewarePath = path.join(appPath, "middlewares");

    for (const file of Deno.readDirSync(middlewarePath)) {
      if (!file || !file.name) {
        continue;
      }
      if (file.name.indexOf("ts") > -1) {
        let middleware;
        try {
          middleware =
            (await import(path.join("file://", middlewarePath, file.name)))
              .middleware;
        } catch (e) {
          continue;
        }
        app.use(middleware);
      }
    }
  } catch (e) {
    if (isIgnoreError(e)) return;
    console.error("Set middleware Fail!", e);
  }
}
