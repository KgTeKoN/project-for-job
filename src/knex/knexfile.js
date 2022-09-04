require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.PG_CONNECTION_HOST,
            port: process.env.PG_CONNECTION_PORT,
            user: process.env.PG_CONNECTION_HOST,
            password: process.env.PG_CONNECTION_PASSWORD,
            database: process.env.PG_CONNECTION_DB
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
    },
    onUpdateTrigger: table => `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp();
  `
};
