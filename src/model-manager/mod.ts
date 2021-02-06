import { Application, path, Database } from "../deps.ts";
import { getConfig } from "../utils/configer.ts";
import { isIgnoreError } from "../utils/mod.ts";

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
    const list = [];
    for (const file of Deno.readDirSync(modelPath)) {
      if (!file || !file.name) {
        continue;
      }
      if (file.name.indexOf("ts") > -1) {
        const model =
          (await import(path.join("file://" + modelPath, file.name))).model;
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
