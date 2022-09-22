const { encryptionPassword } = require('../crypto/cipher');
const { hashPassword } = require('../crypto/hash.js');
const PersonController = require('../PersonCRUD/person.controller')

const handlerSignUp = async (body) => {
    const {name, email, password} = body;
    const hash = await hashPassword(password);
    const encryption = await encryptionPassword(hash);
    const result = await PersonController.createPerson(name, email, encryption);
    return result
}

module.exports = { handlerSignUp }



