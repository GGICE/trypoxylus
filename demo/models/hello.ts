import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";

export class model extends Model {
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
      allowNull: true,
      length: 50,
    },
  };
}
