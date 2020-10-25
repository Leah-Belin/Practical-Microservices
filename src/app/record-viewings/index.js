const express = require('express')

function createActions ({

}){
    return{

    }
}

function createHandlers ({ actions })
{
    return {

    }
}

function createRecordViewings ({

}){
    const handlers = createHandlers({ actions })
    const router = express.Router()

    router.route('/:videoId').post(handlers.handleRecordViewing)

    return { actions, handlers, router }
}

module.exports = createRecordViewings