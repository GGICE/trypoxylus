import { Application } from "https://deno.land/x/oak/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import { DataTypes, Database, Model } from "https://deno.land/x/denodb/mod.ts";
import { getConfig } from "../utils/configer.ts";
import { IModel } from "../common/index.ts";

class User extends Model {
  static table = "user";

  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      length: 50,
    },
  };
}

export async function initModel(app: Application, appPath: string) {
  console.log("2232");
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

  const db = new Database("mysql", {
    host: databaseHost,
    username: databaseUserName!,
    password: databaseUserPassword!,
    database: databaseName,
    port: databasePort,
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
