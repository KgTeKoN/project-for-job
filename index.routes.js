const express = require('express');
const routes = express.Router();
const RAM = require('/src/RAM/route.ram');

routes.use(RAM);

module.exports = routes;
