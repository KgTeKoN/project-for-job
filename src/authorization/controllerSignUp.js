const { handlerSignUp } = require('./handler.signUp');

const signUp = async (req, res) => {
    const result = await handlerSignUp(req.body)
    res.status(201).json(result);
    res.end();
}

module.exports = { controllerSignUp: signUp }
