export const router = '/hello';

export const get = (ctx) => {
  ctx.body = {
    word: "hello world!",
  };
}