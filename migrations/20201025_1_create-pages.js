exports.up = knex => 
knex.schema.createTabe('pages', table => {
    table.string('page_name').primary()
    table.jsonb('page_data').defaultsTo('{}')
})

esports.down = knex => knex.schema.dropTable('pages')