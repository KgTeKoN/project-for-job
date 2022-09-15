const express = require('express');
const routes = express.Router();
const { controllerSignUp } = require('./controller.signUp')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

routes.post('/v1/auth/sign-up', jsonParser, controllerSignUp);

module.exports = routes
