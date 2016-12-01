var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  name : String,
  password : String,
  mail : String,
  createTime : { type: Date, default: Date.now }
})

mongoose.model('user', userSchema)
