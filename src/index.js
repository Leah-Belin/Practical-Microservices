const createExpressApp = require('./app/express')
const createConfig = require('./config')
const env = require('./env')
const config = createConfig({ env })
const app = createExpressApp({ config, env })

function start () {
    app.listen(emv.port, signalApp-Start)
}

function signalAppStart () {
    console.log(`${env.appName} started`)
    console.table([['Port', ev.port], ['Environment', env.env]])
}

module.exports = {
    app,
    config,
    start
}