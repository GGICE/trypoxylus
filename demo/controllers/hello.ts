import { CtrlModule } from 'trypoxylus';

export const controller: CtrlModule = {
  router: '/hello',
  get: (ctx) => {
    ctx.body = {
      word: "hello world!",
    };
  }
};