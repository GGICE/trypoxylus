import * as Koa from 'koa';
import * as Sequelize from 'sequelize';

export interface CtrlModule {
  router: string
  get?: (ctx: Koa.Context) => {}
  post?: (ctx: Koa.Context) => {}
  put?: (ctx: Koa.Context) => {}
  delete?: (ctx: Koa.Context) => {}
  head?: (ctx: Koa.Context) => {}
  options?: (ctx: Koa.Context) => {}
  patch?: (ctx: Koa.Context) => {}
  all?: (ctx: Koa.Context) => {}
  link?: (ctx: Koa.Context) => {}
  unlink?: (ctx: Koa.Context) => {}
}

export interface Model {
  modelName: string
  attributes: Sequelize.ModelAttributes,
  modelOptions?: Sequelize.ModelOptions
}