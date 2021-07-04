import { Context } from "https://deno.land/x/oak/mod.ts";

export const controller = {
  router: "/hello",
  get: (ctx: Context) => {
    ctx.response.body = "Hello world";
  },
  post: (ctx: Context) => {
    ctx.response.body = "Hello world";
  },
};
