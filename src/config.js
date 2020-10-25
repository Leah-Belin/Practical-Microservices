const createKnexClient = require('./knex-client') 
const createHomeApp = require('./app/home')
const createRecordViewingsApp = require('./app/record-viewings')
const createPostgresClient = require('./postgres-client') 
const createMessageStore = require('./message-store')

function createConfig ({ env }) {
  const knexClient = createKnexClient({ 
    connectionString: env.databaseUrl
  })
  const postgresClient = createPostgresClient({
    connectionString: env.messageStoreConnectionString
  })
  const messageStore = createMessageStore({ db: postgresClient })
  const homeApp = createHomeApp({ db: knexClient }) 
  const recordViewingsApp = createRecordViewingsApp({ messageStore })

  return {
    env,
    db: knexClient,
    homeApp,
    recordViewingsApp,
    messageStore
  }
}

module.exports = createConfig
