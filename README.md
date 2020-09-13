English | [简体中文](https://github.com/GGICE/trypoxylus/blob/master/README_zh-CN.md) 

Based on Deno's service engine, quickly start server-side development

# Use

## Installation

``` shell
deno install -A -f --unstable https://deno.land/x/trypoxylus@v0.0.3/bin/trypoxylus.ts
```

## Write project code

### New project directory

```
mkdir demo
```
### Create a configuration file

```
vi config.ts
```
The content is as follows:
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
The content is as follows:

```
import {Context} from "https://deno.land/x/oak/mod.ts";

export const controller = {
   router: "/hello",
   get: async (ctx: Context) => {
     ctx.response.body ='Hello world';
   },
};

```

### Startup project

To the parent directory of the project directory

```
trypoxylus start demo
```
Then visit `http://localhost:9000/hello`

## More

For details on the use of databases and middleware, see the `demo` directory

Detailed configuration example `demo/config-example.ts` file
