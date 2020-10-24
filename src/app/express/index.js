const express = require('express')
const { join } = require('path')

const mountMiddleware = require('./mount-middleware')

function createExpressApp ({ config, env }) {
  const app = express()

  // Configure PUG
  app.set('views', join(__dirname, '..'))
  app.set('view engine', 'pug')

  mountMiddleware(app, env)

  return app
}

module.exports = createExpressApp
