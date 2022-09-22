const port = 5000;
const cipherAlgorithm = 'aes-256-cbc';
require('dotenv').config();
const secret = process.env.SECRET_KEY;
const PG_CONNECTION_HOST = process.env.PG_CONNECTION_HOST;
const PG_CONNECTION_PORT = process.env.PG_CONNECTION_PORT;
const PG_CONNECTION_USER = process.env.PG_CONNECTION_USER;
const PG_CONNECTION_PASSWORD = process.env.PG_CONNECTION_PASSWORD;
const PG_CONNECTION_DB = process.env.PG_CONNECTION_DB;

module.exports = { port, cipherAlgorithm, secret, PG_CONNECTION_HOST,
    PG_CONNECTION_PORT, PG_CONNECTION_USER, PG_CONNECTION_PASSWORD, PG_CONNECTION_DB }
