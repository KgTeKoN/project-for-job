const express = require('express');
const routes = express.Router();
const RAM = require('./src/RAM/route.ram');
const auth = require('./src/authorization/authorization.routes')

routes.use('/api', RAM, auth);

module.exports = routes;
