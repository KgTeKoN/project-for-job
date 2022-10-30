const { createHash, encryptData, decrypto, compareHash } = require('../crypto/crypto');
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
    const result = await PersonController.findPerson(email);
    const decipherPassword = await decrypto(result.password);
    const compareResult = compareHash(decipherPassword, password)
    if(compareResult) {
        const accessToken = await token({email: email, id: result.id}, accessTokenKey, 60*10);
        const refreshToken = await token(data, refreshTokenKey, 60*60);
        const hashRefreshToken = await createHash(refreshToken);
        const resultUpdate = await PersonController.updatePerson(result.id, hashRefreshToken, 'refresh_token')
        return {
            id: resultUpdate.id,
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    }

    return 'Invalid email or password';
}

module.exports = { signUp, signIn }



