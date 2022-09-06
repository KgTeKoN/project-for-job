require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.PG_CONNECTION_HOST || 'localhost',
            port: process.env.PG_CONNECTION_PORT || 5080,
            user: process.env.PG_CONNECTION_HOST || 'postgres',
            password: process.env.PG_CONNECTION_PASSWORD || 'example',
            database: process.env.PG_CONNECTION_DB || 'postgres_db_project_for_job'
        },
        pool: {
            min: 0,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
    },
    on_updated_timestamp: () =>`
        CREATE OR REPLACE FUNCTION on_update_timestamp()
        RETURNS trigger AS $$
            BEGIN
                NEW.updated_at = now();
                RETURN NEW;
            END;
        $$ language 'plpgsql';
    `,

    DROP_ON_UPDATE_TIMESTAMP_FUNCTION: `DROP FUNCTION on_update_timestamp`,

    onUpdateTrigger: table => `
        CREATE TRIGGER ${table}_updated_at
        BEFORE UPDATE ON ${table}
        FOR EACH ROW
        EXECUTE PROCEDURE on_update_timestamp();
    `,

};
