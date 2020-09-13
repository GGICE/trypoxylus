import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import { ICtrl } from "../common/mod.ts";
import { isIgnoreError } from '../utils/mod.ts';

const SUPPORT_METHOD_LIST = [
  "get",
  "post",
  "put",
  "delete",
  "head",
  "options",
  "patch",
  "all",
];

export async function initRouters(
  app: Application,
  router: Router,
  appPath: string,
) {
  try {
    let routerPath = path.join(appPath, "controllers");

    for (const file of Deno.readDirSync(routerPath)) {
      if (!file || !file.name) {
        return;
      }
      if (file.name.indexOf("ts") > -1) {
        import(path.join("file://", routerPath, file.name)).then(
          ({ controller }: { controller: ICtrl }) => {
            if (!controller.router) {
              throw new Error("Not set router!");
            }
  
            SUPPORT_METHOD_LIST.forEach((key) => {
              const method = controller[key as "get"];
              if (method) {
                router[key as "get"](controller.router, method);
              }
            });
          },
        );
      }
    }
  } catch (e) {
    if (isIgnoreError(e)) return;
    console.error("Set controller Fail!", e);
  }
}
