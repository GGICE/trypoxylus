版本 2.0

GSEVER 基于koa.js 2的纯后端应用框架，主要用于创建REST API。

##### 目录结构

 	|-common/ 一些公用方法
 	|-config/ 配置文件
 	|-models/ 数据Model层
 	|-routes/ 路由文件
 	|-index.js 应用的主要入口
 	|-routes.js 路由声明文件
 	|-package.json 声明各种依赖


##### 试用
建议环境 node version 7.0 以上

	node --harmony index.js

尝试POST请求 (自动添加一个user数据)

	http://127.0.0.1:9001/add

尝试GET请求 （展示刚才添加的user）

	http://127.0.0.1:9001/show


##### 开始开发

	supervisor --harmony index.js
