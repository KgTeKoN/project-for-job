const { signupSchema } = require('./schema.js');

const bodyValidator = async (req, res, next) => {
    try {
        await signupSchema.validateAsync(req.body);
        return next();
    } catch (e) {
        const result = e.details[0].message;
        res.status(400).send(result);
        res.end();
    }
};

module.exports = { bodyValidator };
