"use strict";
var index = require('./routes/index'),
    add = require('./routes/add'),
    show = require('./routes/show');

module.exports = function(app, router) {
  app.use(router.routes());
  app.use(router.allowedMethods());
  router.get('/', function*() {
    yield index;
  });
  router.post('/add', function*() {
    yield add;
  });
  router.get('/show', function*() {
    yield show;
  });
};
