const { handlerSignUp } = require('./handler.signUp');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const result = await handlerSignUp(name, email, password)
    res.send(result);
    res.end();
}

module.exports = { createUser }
