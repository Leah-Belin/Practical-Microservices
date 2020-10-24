const camelCaseKeys = require('camel-case-keys')
const express = require('express')

function createHandlers ({ queries }){
    return {   

    }
}

function createQueries ({ db }){
    return {

    }
}

function createHome ({ db }){
    const queries = createQueries ({ db })
    const handlers = createHandlers ({ queries })
    const router = express.Router()

    router.route('/').get(handlers.home)

    return { handlers, queries, router }
}

module.exports = createHome
