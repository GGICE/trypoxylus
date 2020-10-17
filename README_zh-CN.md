
 [English](https://github.com/GGICE/trypoxylus/blob/master/README.md) | 简体中文

基于 Deno 的服务引擎，快速开始服务端开发

# 使用 

## 安装

### 设置 tsconfig.json
为了解决该问题: [#64294112](https://stackoverflow.com/questions/63881639/typescript-import-problem-after-updating-deno/64294112#64294112)，需要设置 `tsconfig.json`。在当前目录新建一个 `tsconfig.json` 文件，内容如下：

```
{
  "compilerOptions": {
    "importsNotUsedAsValues": "remove",
    "isolatedModules": false,
  }
}
```

### 安装
``` shell
deno install -A -f --unstable -c tsconfig.json https://deno.land/x/trypoxylus@v0.0.3/bin/trypoxylus.ts
```


## 编写项目代码

### 新建项目目录

```
mkdir demo
```
### 创建配置文件

```
vi config.ts
```
内容如下：
```
export default {
  // 服务启动的端口号
  port: 9000,
};
```
### 新建 controller

```
mkdir controllers && cd controllers && vi hello.ts
```
内容如下：

```
import { Context } from "https://deno.land/x/oak/mod.ts";

export const controller = {
  router: "/hello",
  get: async (ctx: Context) => {
    ctx.response.body = "Hello world";
  },
};

```

### 启动项目

到项目目录的父目录

```
trypoxylus start demo
```
然后访问 `http://localhost:9000/hello`

## 更多

有关数据库、中间件的使用详细见 `demo` 目录

详细的配置示例 `demo/config-example.ts` 文件
