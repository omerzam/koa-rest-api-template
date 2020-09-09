const userController = require('../controllers/user.controller')

module.exports = ({ router }) => {
  // getting the home route
  router.get('/health_check', (ctx, next) => {
    ctx.body = 'ok!'
  })

  router.get('/user', (ctx, next) => {
    const user = userController.get()
    ctx.body = user
  })
}
