const { PG_CONNECTION_HOST,
    PG_CONNECTION_PORT, PG_CONNECTION_USER, PG_CONNECTION_PASSWORD,
    PG_CONNECTION_DB, knexTableName
} = require('../../config')

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: PG_CONNECTION_HOST,
            port: PG_CONNECTION_PORT,
            user: PG_CONNECTION_USER,
            password: PG_CONNECTION_PASSWORD,
            database: PG_CONNECTION_DB
        },
        pool: {
            min: 0,
            max: 10
        },
        migrations: {
            tableName: knexTableName
        },
    }
};
