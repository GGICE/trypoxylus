"use strict";
var mongoose = require("mongoose"),
  user = mongoose.model('user');

module.exports = function*(next) {
  var newUser = new user({
    name: 'xiaoming',
    password: '123456',
    mail: 'i@ice.gs'
  });
  yield newUser.save();
  this.body = {
    word: 'save succeed！'
  };
};
