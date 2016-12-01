var router = require('koa-router')()
var koa = require('koa')
var mongoose = require('mongoose')
var statics = require('koa-static-folder')
var fs=require('fs')
var app = module.exports = new koa()

//config
var config = require('./config/config')

//connect to database
var mongoUrl = config.mongo.host + ':' + config.mongo.port + '/' + config.mongo.database
mongoose.connect(mongoUrl)
var db = mongoose.connection.on("error", function (err) {
    console.log(err)
})

//load models
var modelsPath = "./models"
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf("js")) {
        require(modelsPath + "/" + file)
    }
})

// routes
require("./routes")(app, router)

if (!module.parent) app.listen(config.port, function () {
    console.log('listening to http://localhost:' + config.port)
})
