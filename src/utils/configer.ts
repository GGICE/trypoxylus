import * as path from "https://deno.land/std/path/mod.ts";
import { Iconfig } from "../common/mod.ts";

let config: Iconfig;

export const getConfig = async (): Promise<Iconfig> => {
  const appPath = window.APP_PATH;
  const configPathOfEnv = Deno.env.get("TY_CONFIG");
  const configPath = configPathOfEnv
    ? path.join("file://", configPathOfEnv)
    : path.join("file://", appPath, "config.ts");
  config = config || (await import(configPath)).default;
  return config || undefined;
};
