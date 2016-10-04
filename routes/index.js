var mongoose = require("mongoose")

module.exports = async function (ctx, next) {
    ctx.body = {
      word : 'hello world!'
    }
}
