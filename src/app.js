const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const koaBunyanLogger = require('koa-bunyan-logger')
const config = require('./config')
const app = new Koa()

// logger init
app.use(koaBunyanLogger({
  name: config.name,
  level: config.loglevel
}))

app.use(koaBunyanLogger.requestIdContext())
app.use(koaBunyanLogger.timeContext())
app.use(koaBunyanLogger.requestLogger())

// validate library init
require('koa-validate')(app)

app.use(bodyParser())

const basicRoutes = require('./routes/basic')

// Global error handler
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

// instantiate our new Router
const router = new Router()

basicRoutes({ router })

app.use(router.routes())
app.use(router.allowedMethods())

const server = app.listen(config.port)
module.exports = server
