const express = require('express');
const routes = express.Router();
const { controllerSignUp } = require('./controller.signUp');
const { bodyValidator } = require('./validate.inputData');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

routes.post('/v1/auth/sign-up', jsonParser, bodyValidator, controllerSignUp);

module.exports = routes
