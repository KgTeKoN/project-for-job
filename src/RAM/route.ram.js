const express = require('express');
const { controllerRAM } = require('./controller.ram');

const routes = express.Router();

routes.get('/api/v1/health', controllerRAM);

module.exports = routes;
