import { Application } from "https://deno.land/x/oak/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import { Database } from "https://deno.land/x/denodb/mod.ts";
import { getConfig } from "../utils/configer.ts";
import { isIgnoreError } from '../utils/mod.ts';
import { join } from "https://deno.land/std@0.67.0/path/win32.ts";

export async function initModel(app: Application, appPath: string) {
  const {
    databaseUri,
    databaseName,
  } = await getConfig();

  if (!databaseUri || !databaseName) {
    return;
  }

  const db = new Database("mongo", {
    uri: databaseUri,
    database: databaseName,
  });

  try {
    const modelPath = path.join(appPath, "models");

    app.state.models = app.state.models || {};
    let list = [];
    for (const file of Deno.readDirSync(modelPath)) {
      if (!file || !file.name) {
        continue;
      }
      if (file.name.indexOf("ts") > -1) {
        const model = (await import(path.join("file://" + modelPath, file.name))).model;
        app.state.models[model.table] = model;
        list.push(model);
      }
    }
    db.link(list);
    try {
      await db.sync();
    } catch (e) {
      console.warn("db sync error");
    }
  } catch (e) {
    if (isIgnoreError(e)) return;
    console.error("Set models Fail!", e);
  }
}
