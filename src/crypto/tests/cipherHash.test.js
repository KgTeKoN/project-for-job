const { encryptionData, hashData } = require('../crypto')

describe('cipher+hash', () => {
    const secret = 'password';

    test('Password must be different from the incoming password', async () => {
        const cipher = await encryptionData(secret);
        expect(cipher).not.toBe(secret);
        expect(cipher.length).toBeGreaterThan(30);
    })

    test('Password must be different from the incoming password', async () => {
        const hash = await hashData(secret);
        expect(hash).not.toBe(secret);
        expect(hash.length).toBeGreaterThan(30);
    })
})
