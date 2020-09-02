const _ = require('lodash')
const result = require('dotenv').config()

if (result.error) {
  throw result.error
}

const env = process.env.NODE_ENV || 'development'
const configs = {
  base: {
    env,
    name: process.env.APP_NAME || 'Koa Rest API App',
    host: process.env.APP_HOST || '127.0.0.1',
    port: process.env.APP_PORT || 3000,
    logLevel: 'debug'
  },
  production: {
    logLevel: process.env.LOG_LEVEL || 'info'
  },
  development: {
    logLevel: process.env.LOG_LEVEL || 'debug'
  },
  test: {
  }
}

const config = _.merge(configs[env], configs.base)

module.exports = config
