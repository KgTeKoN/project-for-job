const express = require('express');
const routes = express.Router();
const RAM = require('./src/RAM/route.ram');
const auth = require('./src/authorization/routes.authorization')

routes.use('/api', RAM, auth);

module.exports = routes;
