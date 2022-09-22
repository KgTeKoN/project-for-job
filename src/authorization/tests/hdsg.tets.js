const { createHash, encryptData } = require('../../crypto/crypto');
const jest = require('jest')
let data = {
    name: "Andriy",
    email: "hasherama8@gmail.com",
    password: "password"
}

const { addUserInDB } = jest.createMockFromModule('../handler.addUserInDB.js');
console.log(addUserInDB)

// mockModule.addUserInDB = jest.fn(async (data) => {
//     const { name, email, password } = data;
//     const hash = await createHash(password);
//     const encryptedPassword = await encryptData(hash);
// })

test('implementation created by jest.createMockFromModule', async () => {
    await addUserInDB(data);
    expect(createHash).toBeCalledWith(data.password)
});
