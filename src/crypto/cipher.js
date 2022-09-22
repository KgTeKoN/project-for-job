const crypto = require('crypto');
const { cipherAlgorithm } = require('../../config');
require('dotenv').config();

const key = Buffer.from(process.env.SECRET_KEY, 'hex');

const encryptionPassword = async (password) => {
    const iv = crypto.randomBytes(16).toString('hex').slice(0, 16);;
    const cipher = crypto.createCipheriv(cipherAlgorithm, key, iv);

    let encrypted = cipher.update(String(password), 'utf8', 'hex')
    encrypted += cipher.final('hex');

    return encrypted
}

module.exports = { encryptionPassword }
