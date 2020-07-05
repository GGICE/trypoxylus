import { Iconfig } from "../common/mod.ts";

let config: Iconfig | undefined;

export const getConfig = async (): Promise<Iconfig> => {
  const appPath = (globalThis as any).APP_PATH;
  config = config || (await import(appPath + "/config.ts")).default;
  return config!;
};
