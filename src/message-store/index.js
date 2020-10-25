const createWrite = require('./write')
const VersionConflictError = require('./version-conflict-error')

function createMessageStore ({ db }) {
    const write = createWrite({ db })

    return {
        write: write
    }
} 

module.exports = exports = createMessageStore
exports.VersionConflictError = VersionConflictError