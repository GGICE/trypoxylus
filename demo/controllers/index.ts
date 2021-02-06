import { Context } from "https://deno.land/x/oak/mod.ts";

export const controller = {
  router: "/",
  get: (ctx: Context) => {
    ctx.response.body = "index page";
  }
};
