const crypto = require('crypto');
const { cipherAlgorithm, secret } = require('../../config');
const argon2 = require('argon2')

const key = Buffer.from(secret, 'hex');

const encryptData = async (data) => {
    const iv = crypto.randomBytes(16).toString('hex').slice(0, 16);
    const cipher = crypto.createCipheriv(cipherAlgorithm, key, iv);

    let encrypted = cipher.update(String(data), 'utf8', 'hex')
    encrypted += cipher.final('hex');

    return encrypted
}

const createHash = async (data) => {
    const hash = await argon2.hash(data)
    return hash;
}

module.exports = { encryptData, createHash }
