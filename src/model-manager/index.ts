import { Application } from "https://deno.land/x/oak/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import { DataTypes, Database, Model } from "https://deno.land/x/denodb/mod.ts";
import { getConfig } from "../utils/configer.ts";
import { IModel } from "../common/index.ts";

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
        return;
      }
      if (file.name.indexOf("ts") > -1) {
        const model = (await import(modelPath + "/" + file.name)).model;
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
    console.error("Set models Fail!", e);
  }
}
