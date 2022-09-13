const { encryptionPassword } = require('./cipher');
const { hashPassword } = require('./hash.js');

const handlerSignUp = async (name, email, password) => {
    const hash = await hashPassword(password);
    const encryption = await encryptionPassword(hash);

}

module.exports = { handlerSignUp }



