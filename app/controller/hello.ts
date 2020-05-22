export default {
  router: '/hello',
  get(ctx) {
    ctx.body = {
      word: "hello world!",
    };
  }
}