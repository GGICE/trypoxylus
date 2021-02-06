import { path } from "../deps.ts";
import { Iconfig } from "../common/mod.ts";

let config: Iconfig | undefined;

export const getConfig = async (): Promise<Iconfig> => {
  // deno-lint-ignore no-explicit-any
  const appPath = (globalThis as any).APP_PATH;
  const configPath = path.join("file://", appPath, "config.ts");

  config = config || (await import(configPath)).default;
  return config!;
};
