var index = require('./routes/index'),
    add = require('./routes/add'),
    show = require('./routes/show')

module.exports = function(app, router) {
  app.use(router.routes())
  app.use(router.allowedMethods())
  router.get('/', index)
  router.post('/add', add)
  router.get('/show', show)
}
