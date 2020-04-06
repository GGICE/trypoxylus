var mongoose = require('mongoose'),
  user = mongoose.model('user')

module.exports = async function (ctx, next) {
  var users = await user.find({
    name: 'xiaoming'
  }).exec(function (doc, error) {
    if (error) {
      console.log(error)
    }
  })
  ctx.body = users
}