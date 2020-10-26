const Bluebird = require('bluebird')
const uuid = require('uuidv4')
const category = require('./category')

function configureCreateSubscription({ read, readLastMessage, write }){
    return ({
        streamName, 
        handlers,
        messagesPerTick = 100,
        subscriberId,
        positionUpdateInterval = 100,
        tickIntervalMs = 100
    }) => {
        const subscriberStreamName = `subscruberPosition-${subscriberId}`

        let currentPosition = 0
        let messagesSinceLastPsitionWrite = 0
        let keepGoing = true

        return{
            loadPosition,
            start,
            stop,
            tick,
            writePosition
        }
    }
}

module.exports = configureCreateSubscription