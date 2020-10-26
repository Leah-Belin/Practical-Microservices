const deserializeMessage = require('./deserialize-message')
const getLastMessageSql = 'SELECT * FROM get_last_stream_message($1)'
const getCategoryMessagesSql = 'SELECT * FROM get_category_messages($1, $2, $3,)'
const getStreamMessagesSql = 'SELECt * FROM get_stream_messages($1, $2, $3)'


function createRead ({ db }){
    function read (streamName, fromPosition = 0, maxMessages = 1000){
        let query = null //<callout id="comessageStore.read.bookkeeping />
        let values = []

        if (streamName.includes('-')) {
            //Entity streams have a dash
            query = getStreamMessagesSql;
            values = [streamName, fromPosition, maxMessages]
        } else {
            //Category streams do not have a dash
            query = getCategoryMessagesSql
            values = [streamName, fromPosition, maxMessages]
        }

        return db.query(query, values)
            .then(res => res.rows.map(deserializeMessage))
    }
    function readLastMessage (streamName) {
        return db.query(getLastMessageSql, [ streamName ])
            .then(res => deserializeMessage(res.rows[0]))
    }
    return {
        read, 
        readLastMessage
    }
}

function createRead({ db }) {
    return {

    }
}

module.exports = exports = createRead