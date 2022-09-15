require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.PG_CONNECTION_HOST || 'localhost',
            port: process.env.PG_CONNECTION_PORT || 5080,
            user: process.env.PG_CONNECTION_USER || 'postgres',
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
    }
};
