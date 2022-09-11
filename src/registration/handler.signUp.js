const { encryptionPassword } = require('./cipher')

const handlerSignUp = async (name, email, password) => {
    const hash = await hashPassword(password);
    const encryption = await encryptionPassword(hash);

}

module.exports = { handlerSignUp }



