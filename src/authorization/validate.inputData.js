const { signUpSchema } = require('./validate.schema.js');

const signUpValidator = async (req, res, next) => {
    try {
        await signUpSchema.validateAsync(req.body);
        return next();
    } catch (e) {
        const result = e.details[0].message;
        res.status(400).send(result);
        res.end();
    }
};

module.exports = { signUpValidator };
