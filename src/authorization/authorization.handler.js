const { createHash, encryptData } = require('../crypto/crypto');
const PersonController = require('../PersonCRUD/person.controller')
const { token } = require('./jwt')
const { accessTokenKey, refreshTokenKey } = require('../../config')

const signUp = async (data) => {
    const { name, email, password } = data;
    const hash = await createHash(password);
    const encryptedPassword = await encryptData(hash);
    const result = await PersonController.createPerson(name, email, encryptedPassword);

    return result
}

const signIn = async (data) => {
    const { email, password } = data;
    // resultCompare порівняння паролів
    if(resultCompare) {
        const accessToken = await token({email: email, id: id}, accessTokenKey, 60*10);
        const refreshToken = await token(data, refreshTokenKey, 60*60);
        return {
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    }
    return 'Invalid password';
}

module.exports = { signUp, signIn }



