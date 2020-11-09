
 English | [简体中文](https://github.com/GGICE/trypoxylus/blob/master/README_zh-CN.md)

Deno-based service engine for fast start of server-side development

# Use 

## Installation

### Set tsconfig.json
To address the issue: [#64294112](https://stackoverflow.com/questions/63881639/typescript-import-problem-after-updating-deno/64294112#64294112) You need to set up `tsconfig.json`. Create a new `tsconfig.json` file in the current directory with the following contents.

```
{
  "compilerOptions": {
    "imagesNotUsedAsValues": "remove",
    "isolatedModules": false,
  }
}
```

### Installation
``` shell
deno install -A -f --unstable -c tsconfig.json https://deno.land/x/trypoxylus@v0.0.3/bin/trypoxylus.ts
```

## Write project code

### Directory of new projects

```
mkdir demo
```
### Create configuration file

```
vi config.ts
```
It reads as follows.
```
export default {
  // Port number for service startup
  port: 9000,
};
```
### New controller

```
mkdir controllers && cd controllers && vi hello.ts
```

It reads as follows.

```
import { Context } from "https://deno.land/x/oak/mod.ts";

export const controller = {
  router: "/hello",
  get: async (ctx: Context) => {
    ctx.response.body = "Hello world";
  },
};
```

### Start the project

To the parent of the project directory

```
trypoxylus start demo
```
Then go to `http://localhost:9000/hello`

## More

See the `demo` directory for details on using the database and middleware.

Detailed configuration example `demo/config-example.ts` file
