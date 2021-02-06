import { Context, Model, CorsOptions  } from '../deps.ts';

export interface ICtrl {
  router: string;
  get?: (ctx: Context) => void;
  post?: (ctx: Context) => void;
  put?: (ctx: Context) => void;
  delete?: (ctx: Context) => void;
  head?: (ctx: Context) => void;
  options?: (ctx: Context) => void;
  patch?: (ctx: Context) => void;
  all?: (ctx: Context) => void;
}

export type IModel = Model;

export interface Iconfig {
  databaseUri: string;
  databaseName?: string;
  port?: number;
  corsOptions?: CorsOptions;
}
