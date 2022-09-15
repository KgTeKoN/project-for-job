const crypto = require('crypto');
const { cipherAlgorithm } = require('../../config');

const encryptionPassword = async (password) => {
    const iv = crypto.randomBytes(8).toString('hex');
    const cipher = crypto.createCipheriv(cipherAlgorithm, 'utf8', iv);

    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted
}

module.exports = { encryptionPassword }
