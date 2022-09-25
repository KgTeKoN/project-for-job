const { addUserInDB } = require('./authorization.handler');

const signUp = async (req, res) => {
    const result = await addUserInDB(req.body)
    res.status(201).json(result);
    res.end();
}

module.exports = { controllerSignUp: signUp }
