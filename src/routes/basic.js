module.exports = ({ router }) => {
  // getting the home route
  router.get('/health_check', (ctx, next) => {
    ctx.body = 'ok!'
  })
}
