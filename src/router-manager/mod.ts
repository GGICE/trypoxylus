import { Application, Router, ld, path } from "../deps.ts";
import { ICtrl } from "../common/mod.ts";
import { isIgnoreError } from "../utils/mod.ts";

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

export function initRouters(
  app: Application,
  router: Router,
  appPath: string,
) {
  try {
    const routerPath = path.join(appPath, "controllers");

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
                if (ld.isArrayLike(method)) {
                  // deno-lint-ignore no-explicit-any
                  router[key as "get"](controller.router, ...(method as any));
                } else {
                  router[key as "get"](controller.router, method);
                }
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
