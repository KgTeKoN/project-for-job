exports.up = function(knex) {
  return knex.schema.createTable("users", t => {
      t.increments("id").primary();
      t.string("name", 20);
      t.string("email", 40).notNullable().unique();
      t.string("password", 300);
      t.boolean("is_deleted");
      t.timestamps(true, true);
  }).then(() => knex.raw(`
        CREATE OR REPLACE FUNCTION on_update_timestamp()
        RETURNS trigger AS $$
            BEGIN
                NEW.updated_at = now();
                RETURN NEW;
            END;
        $$ language 'plpgsql';
    `)).then(() => knex.raw(`
        CREATE TRIGGER users_updated_at
        BEFORE UPDATE ON users
        FOR EACH ROW
        EXECUTE PROCEDURE on_update_timestamp();
    `))
};

exports.down = function(knex) {
    return knex.schema.dropTable("users").raw(`DROP FUNCTION on_update_timestamp`);
};
