import { DataTypes, Model } from 'https://deno.land/x/denodb/mod.ts';

export class model extends Model {
  static table = 'user';
  static fields = {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  };
}