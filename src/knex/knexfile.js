require('dotenv').config();

module.exports = {
    client: 'pg',
    connection: {
        host: process.env.PG_CONNECTION_HOST,
        port: process.env.PG_CONNECTION_PORT,
        user: process.env.PG_CONNECTION_HOST,
        password: process.env.PG_CONNECTION_PASSWORD,
        database: process.env.PG_CONNECTION_DB
    },
};
