import { Application } from "https://deno.land/x/oak/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';
import { getConfig } from "../utils/configer.ts";
import { IModel } from '../common/index.ts';

export async function initModel(app: Application, appPath: string ) {
  const {
    databasePort,
    databaseHost,
    databaseName,
    databaseUserName,
    databaseUserPassword,
  } = await getConfig();

  if (!databaseHost || !databaseName) {
    return;
  }

  const db = new Database('mysql', {
    host: databaseHost,
    username: databaseUserName!,
    password: databaseUserPassword!,
    database: databaseName,
    port: databasePort
  });

  try {
    let routerPath = path.join(appPath, "controllers");
    const modelPath = path.join(appPath, "models");

    app.state.models =  app.state.models || {};
    let list = [];
    for (const file of Deno.readDirSync(routerPath)) { 
      const model = (await import(modelPath + "/" + file)).model;
      app.state.models[model.table] = model;
      list.push(model);
    }
    db.link(list);
  } catch (e) {
    console.error("Set models Fail!", e);
  }
}
