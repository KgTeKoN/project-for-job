const express = require('express');
const routes = express.Router();
const RAM = require('./src/RAM/route.ram');

routes.use('/api', RAM);

module.exports = routes;
