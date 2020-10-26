const deserializeMessage = require('./deserialize-message')
const getLastMessageSql = 'SELECT * FROM get_last_stream_message($1)'

function createRead ({ db }){
    function readLastMessage (streamName) {
        return db.query(getLastMessageSql, [ streamName ])
            .then(res => deserializeMessage(res.rows[0]))
    }

    return readLastMessage
}

function createRead({ db }) {
    return {

    }
}

module.exports = exports = createRead