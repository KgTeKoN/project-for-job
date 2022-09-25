const express = require('express');
const routes = express.Router();
const { controllerSignUp } = require('./authorization.controller');
const { signUpValidator } = require('./validate.inputData');

routes.post('/v1/auth/sign-up', signUpValidator, controllerSignUp);

module.exports = routes
