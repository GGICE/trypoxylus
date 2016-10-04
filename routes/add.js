var mongoose = require("mongoose"),
  user = mongoose.model('user')

module.exports = async function (ctx, next) {
  var newUser = new user({
    name: 'xiaoming',
    password: '123456',
    mail: 'i@ice.gs'
  })
  await newUser.save()
  ctx.body = {
    word: 'save succeed！'
  }
}
