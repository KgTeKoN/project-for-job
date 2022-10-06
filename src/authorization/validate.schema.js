const Joi = require('joi');

const signUpSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(64).required()
})

const signInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(64).required()
});

module.exports = { signUpSchema, signInSchema };
