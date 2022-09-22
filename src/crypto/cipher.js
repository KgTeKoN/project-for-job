const crypto = require('crypto');
const { cipherAlgorithm, secret } = require('../../config');

const key = Buffer.from(secret, 'hex');

const encryptionPassword = async (password) => {
    const iv = crypto.randomBytes(16).toString('hex').slice(0, 16);
    const cipher = crypto.createCipheriv(cipherAlgorithm, key, iv);

    let encrypted = cipher.update(String(password), 'utf8', 'hex')
    encrypted += cipher.final('hex');

    return encrypted
}

encryptionPassword('ads').then(data => console.log(data))

module.exports = { encryptionPassword }
