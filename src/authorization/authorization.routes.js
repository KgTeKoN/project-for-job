const express = require('express');
const routes = express.Router();
const { controllerSignUp } = require('./authorization.controller');
const { signUpValidator, signInValidator } = require('./validate.inputData');

routes.post('/v1/auth/sign-up', signUpValidator, controllerSignUp);
routes.post('/v1/auth/sign-in', signInValidator, controllerSignIn)

module.exports = routes
