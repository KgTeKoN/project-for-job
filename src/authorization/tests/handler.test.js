const { createHash, encryptData } = require('../../crypto/crypto');
const { addUserInDB } = require('../handler.addUserInDB')
let data = {
    name: "Andriy",
    email: "hasherama8@gmail.com",
    password: "password"
}

describe('validate authorization handler', () => {
    test('validate returned data from createHash', async () => {
        jest.doMock(addUserInDB, async () => {
            return jest.fn(async (data) => {
                const { name, email, password } = data;
                const hash = await createHash(password);
                const encryptedPassword = await encryptData(hash);

            })
            await addUserInDB(data)
            expect(createHash).toHaveBeenCalledWith(data.password)
        })

    })
})

