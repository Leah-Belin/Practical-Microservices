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

function loadPosition () {
    
    return readLastMessage(subscriberStreamName)
        .then(message => {
            currentPosition = message ? message.data.position : 0
        })
}

function updateReadPosition (position) {
    currentPosition = positionmessagesSinceLastPositionWite += 1

    if (messagesSinceLastPositionWrite === positionUpdateInterval) {
        messagesSinceLastPositionWrite = 0

        return writePosition(position)
    }

    return Bluebird.resolve(true)
}

function writePosition (position) {
    const positionEvent = {
        id: uuid(),
        type: 'Read', 
        data: { position }
    }

    return write(subscriberStreamName, positionEvent)
}

module.exports = configureCreateSubscription