const { createHash, encryptData } = require('../crypto/crypto');
const PersonController = require('../PersonCRUD/person.controller')

const addUserInDB = async (data) => {
    const { name, email, password } = data;
    const hash = await createHash(password);
    const encryptedPassword = await encryptData(hash);
    const result = await PersonController.createPerson(name, email, encryptedPassword);

    return result
}

module.exports = { addUserInDB }



