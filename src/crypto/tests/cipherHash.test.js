const { encryptionPassword } = require('../../crypto/cipher')
const { hashPassword } = require('../../crypto/hash')

describe('cipher+hash', () => {
    const secret = 'password';
    let cipher;
    let hash

    beforeAll(async () => {
        cipher = await encryptionPassword(secret);
        hash = await hashPassword(secret);
    })

    test('Password must be different from the incoming password', () => {
        expect(cipher).not.toBe(secret);
        expect(cipher.length).toBeGreaterThan(30);
        expect(hash).not.toBe(secret);
        expect(cipher.length).toBeGreaterThan(30);
    })
})
