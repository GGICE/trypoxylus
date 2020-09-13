
简体中文 | [English](https://github.com/GGICE/trypoxylus/blob/master/README_en.md)

基于 Deno 的服务引擎，快速开始服务端开发

# 使用 

## 安装

``` shell
deno install -A -f --unstable https://deno.land/x/trypoxylus@v0.0.3/bin/trypoxylus.ts
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
    ctx.response.body = 'Hello world';
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
