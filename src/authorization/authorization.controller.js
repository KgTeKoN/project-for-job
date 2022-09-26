const { signUp } = require('./authorization.handler');

const signUp = async (req, res) => {
    const result = await signUp(req.body)
    res.status(201).json(result);
    res.end();
}

module.exports = { controllerSignUp: signUp }
