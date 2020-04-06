var index = require('./controller/index'),
    add = require('./controller/add'),
    show = require('./controller/show')

module.exports = function(app, router) {
  app.use(router.routes())
  app.use(router.allowedMethods())
  router.get('/', index)
  router.post('/add', add)
  router.get('/show', show)
}
