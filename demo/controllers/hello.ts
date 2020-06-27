import { Context } from "https://deno.land/x/oak/mod.ts";

export const controller = {
  router: "/hello",
  get: async (ctx: Context) => {
    try {
      const reuslt = await ctx.state.models.demo.create({
        id: 12,
        name: "ggice",
      });
      ctx.response.body = reuslt;
    } catch (e) {
      console.log("e", e);
      ctx.response.status = 500;
      ctx.response.body = {
        error: e.toString(),
      };
    }
  },
};
