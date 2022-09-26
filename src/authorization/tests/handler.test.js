const { createHash, encryptData } = require('../../crypto/crypto');
const { signUp } = require('../authorization.handler')
const PersonController = require('../../PersonCRUD/person.controller')

const testPasswordCipher = '123456';
const testPasswordHash = 'qwerty';

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

describe('test handler', () => {

    test('input createPerson data must be as data.name, data.email, testPasswordHash', async () => {
        const data = {
            name: "Andriy",
            email: "hasherama8@gmail.com",
            password: "password"
        }
        await signUp(data);

        expect(createHash).toBeCalledWith(data.password);
        expect(createHash).toBeCalledTimes(1);
        expect(encryptData).toBeCalledWith(testPasswordCipher);
        expect(encryptData).toBeCalledTimes(1);
        expect(PersonController.createPerson).toBeCalledWith(
            data.name,
            data.email,
            testPasswordHash
        );
        expect(PersonController.createPerson).toBeCalledTimes(1)
    })
})
