"use strict";
var mongoose = require("mongoose"),
  user = mongoose.model('user');

module.exports = function*(next) {
  var users = yield user.find({
    name: 'xiaoming'
  }).exec(function(doc, error) {
    if (error) {
      console.log(error);
    }
  });
  this.body = users;
};
