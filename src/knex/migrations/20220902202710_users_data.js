const { onUpdateTrigger, on_updated_timestamp } = require('../knexfile')

exports.up = function(knex) {
  return knex.schema.createTable("users", t => {
      t.increments("id").primary();
      t.string("name", 20);
      t.string("email", 30).notNullable().unique();
      t.string("password", 20);
      t.boolean("is_deleted");
      t.timestamps(true, true);
  }).then(() => knex.raw(on_updated_timestamp())).then(() => knex.raw(onUpdateTrigger('users')))
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
