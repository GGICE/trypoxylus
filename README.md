#####node-serve的用处：

node-serve是基于node.js搭建的后端框架(很简单暂且称为框架吧)，连接mongodb，可以实现和前端通过URL交换json数据，满足简单应用开发的后台需求。

#####node-serve用到的一些依赖：

1.node.js serve基于node.js架构。

2.express （[官网](http://expressjs.com/)）
一个node.js的mvc框架，抛离了express的界面表现，使它成为纯serve应用。

3.mongodb ([中文介绍和教程](http://www.w3cschool.cc/mongodb/mongodb-tutorial.html) [官方网站](http://www.mongodb.org/)) 
一个非关系型数据库。

4.monk ([官网](http://www.mongodb.org/)) 
一个操作mongodb的中间件。

#####node-serve的文件结构和作用：
整个文件结构就是expres的大体结构，只是增加数据的读写方法。

-bin 目录：

www (express运行端口配置)

-routes 目录：

*.js  写主要的业务逻辑，接收Post和Get等请求给予回复。

	//index.js 示例
    //该段实现，用户通过127.0.0.1：7778/发送Get请求将会返回{welcome : "node-serve!"}的json数据。
    var express = require('express');
    var router = express.Router();

    router.get('/', function (req, res) {
      var send = {
         welcome : "node-serve!"
      };
      res.send(send);
    });

    router.post('/', function (req, res) {
    });

    module.exports = router;
新添加的路由需要在app.js中进行注册：

    //在app.js中加入这些相当于注册了test的路由，对应routes目录下的test.js
    var test = require('./routes/test');
    app.use('/test', test);

-views 目录：

因为抛离了express这个mvc框架的界面表现，所以该目录无用。

app.js 文件：

espress的主要方法写在这里。

package.json文件：

声明依赖的一些资源包，通过npm install 安装这些依赖。
	
#####如何进行开发

1.安装supervisor (修改代码自动重启node程序)
	
    npm install supervisor -g
    
2.运行与开发

	cd servr
    (sudo) npm install
	supervisor ./bin/www
	//访问
	(http://localhost:7778)

可以使用Chrome的[插件](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo?utm_source=chrome-ntp-launcher)模拟Post等请求来进行开发测试。

3.开启Debug模式(可选)

推荐使用node-inspector,可以在chrome的控制台调试node.js程序。
	
    //安装
    npm install -g node-inspector 
    //运行
    node-inspector
    //启动node程序时加入参数 如
    supervisor --debug ./bin/www
    //浏览器访问127.0.0.1：8080即可进入调试模式