const express = require('express');
const routes = express.Router();
const { createUser } = require('./controller.signUp')

routes.post('v1/auth/sign-up', createUser);

module.exports = routes
