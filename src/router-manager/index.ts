import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import { ICtrl } from "../common/index.ts";

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
  let routerPath = path.join(appPath, "controllers");

  for (const file of Deno.readDirSync(routerPath)) {
    console.log(file.name);
    if (!file || !file.name) {
      return;
    }
    if (file.name.indexOf("js") || file.name.indexOf("ts")) {
      import(routerPath + "/" + file.name).then(
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
}
