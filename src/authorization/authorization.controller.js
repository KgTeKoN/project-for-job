const { signUp } = require('./authorization.handler');

const registration = async (req, res) => {
    const result = await signUp(req.body)
    res.status(201).json(result);
    res.end();
}

const signIn = async (req, res) => {
    const result = await signInHandler(req.body)
    res.status(201).json(result);
    res.end();
}

module.exports = { controllerSignUp: registration, signIn }
