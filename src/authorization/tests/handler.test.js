const { createHash, encryptData } = require('../../crypto/crypto');
const { addUserInDB } = require('../handler.addUserInDB')
const PersonController = require('../../PersonCRUD/person.controller')

const data = {
    name: "Andriy",
    email: "hasherama8@gmail.com",
    password: "password"
}
const testPasswordCipher = '123456';
const testPasswordHash = 'qwerty'

jest.mock('../../crypto/crypto', () => {
    const originalModule = jest.requireActual('../../crypto/crypto');

    return {
        __esModule: true,
        ...originalModule,
        createHash: jest.fn(() => testPasswordCipher),
        encryptData: jest.fn(() => testPasswordHash)
    };
});

jest.mock('../../PersonCRUD/person.controller', () => {
    const originalModule = jest.requireActual('../../PersonCRUD/person.controller');

    return {
        __esModule: true,
        ...originalModule,
        createPerson: jest.fn(() => 'test add in DB was successful')
    };
});

beforeAll(async () => {
    await addUserInDB(data)
})

describe('test handler', () => {

    test('input createHash data must be as data.password', () => {
        expect(createHash).toBeCalledWith(data.password);
        expect(createHash).toBeCalledTimes(1);
    })

    test('input encryptData data must be as testPassword', () => {
        expect(encryptData).toBeCalledWith(testPasswordCipher);
        expect(encryptData).toBeCalledTimes(1);
    })

    test('input PersonController data must be data.name, data.email, testPasswordHash', () => {
        expect(PersonController.createPerson).toBeCalledWith(
            data.name,
            data.email,
            testPasswordHash
        );
        expect(PersonController.createPerson).toBeCalledTimes(1)
    })

})
