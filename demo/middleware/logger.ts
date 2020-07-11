import { Context } from "https://deno.land/x/oak/mod.ts";

export const middleware = async (ctx: Context, next: Function) => {
  console.log('before!');
  await next();
  console.log('after!');
}