GSEVER  base on koa.js 2, a server app staging,for create REST API.

### Depend mainly on

* [Koa](https://github.com/koajs/koa)
* [Koa-route](https://github.com/alexmingoia/koa-router)
* [Mongoose](https://github.com/Automattic/mongoose)
* [MongoDB](https://www.mongodb.com/)

### Use

```
npm install -g ant-create
ant-create create projectName
```

### Directory structure

 	|-common/  some common method
 	|-config/  config file
 	|-models/  data models
 	|-routes/  route file
 	|-index.js  entry
 	|-routes.js route declaration 
 	|-package.json 


##### Run
Support  node version 7.0 +

	node --harmony index.js

Try a post request

	http://127.0.0.1:9001/add

Try a get request （show the user add before）

	http://127.0.0.1:9001/show


##### Start dev

	supervisor --harmony index.js
