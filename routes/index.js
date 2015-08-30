"use strict";
var mongoose = require("mongoose");

module.exports = function*(next) {
    this.body = {
      word : 'hello world!'
    };
};
