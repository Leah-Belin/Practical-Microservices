function mountRoutes (app, config) {
    app.use('/', config.homeApp.router)
    app.use('/record-viewing', config.recordViewings.App.router)
}

module.exports = mountRoutes