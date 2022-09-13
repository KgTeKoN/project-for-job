const argon2 = require('argon2');

const hashPassword = async (password) => {
    try {
        const hash = await argon2.hash(password)
        return hash;
    } catch (e) {
        return e.message
    }
}

module.exports = { hashPassword }

