English |
[简体中文](https://github.com/GGICE/trypoxylus/blob/master/README_zh-CN.md)

Deno-based service engine for fast start of server-side development

# Use

## Installation

```shell
deno install -Af https://deno.land/x/trypoxylus/bin/trypoxylus.ts
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
