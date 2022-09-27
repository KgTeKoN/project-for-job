const { signUpSchema } = require('../validate.schema')

describe('validate schema registration', () => {

    test('validate correct data', async () => {
        const obj1 = { email: 'hasherama8@gmail.com', name: 'Andriy', password: 'xq27031993' };
        await expect(signUpSchema.validateAsync(obj1)).resolves.toEqual(obj1);
    })

    test('try invalid email (valid email)', async () => {
        const obj2 = { email: 'aaa@com', name: 'Andriy', password: 'xq27031993' };
        await expect(signUpSchema.validateAsync(obj2)).rejects.toThrow("\"email\" must be a valid");
    })

    test('try invalid email (is not be empty)', async () => {
        const obj3 = { email: '', name: 'Andriy', password: 'xq27031993' };
        await expect(signUpSchema.validateAsync(obj3)).rejects.toThrow("\"email\" is not allowed to be empty");
    })

    test('try invalid email (must be a string)', async () => {
        const obj4 = { email: 34, name: 'Andriy', password: 'xq27031993' };
        await expect(signUpSchema.validateAsync(obj4)).rejects.toThrow("\"email\" must be a string");
    })

    test('try invalid email (valid email)', async () => {
        const obj5 = { email: 'aaa@gmail.m', name: 'Andriy', password: 'xq27031993' };
        await expect(signUpSchema.validateAsync(obj5)).rejects.toThrow("\"email\" must be a valid email");
    })


    test('try invalid name (length must be at least 3 characters long)', async() => {
        const obj6 = { email: 'hasherama8@gmail.com', name: 'aa', password: 'xq27031993' };
        await expect(signUpSchema.validateAsync(obj6)).rejects.toThrow("\"name\" length must be at least 3 characters long");
    })

    test('try invalid name (must be a string)', async() => {
        const obj7 = { email: 'hasherama8@gmail.com', name: 456, password: 'xq27031993' };
        await expect(signUpSchema.validateAsync(obj7)).rejects.toThrow("\"name\" must be a string");
    })

    test('try invalid name (must only contain alpha-numeric characters)', async() => {
        const obj8 = { email: 'hasherama8@gmail.com', name: 'Христофор', password: 'xq27031993' };
        await expect(signUpSchema.validateAsync(obj8)).rejects.toThrow("\"name\" must only contain alpha-numeric characters");
    })

    test('try invalid name (is not be empty)', async() => {
        const obj9 = { email: 'hasherama8@gmail.com', name: '', password: 'xq27031993' };
        await expect(signUpSchema.validateAsync(obj9)).rejects.toThrow("\"name\" is not allowed to be empty");
    })

    test('try invalid password (must be a string)', async() => {
        const obj10 = { email: 'hasherama8@gmail.com', name: 'Andriy', password: 27031993 };
        await expect(signUpSchema.validateAsync(obj10)).rejects.toThrow("\"password\" must be a string");
    })

    test('try invalid password (length must be at least 6 characters long)', async() => {
        const obj11 = { email: 'hasherama8@gmail.com', name: 'Andriy', password: '12345' };
        await expect(signUpSchema.validateAsync(obj11)).rejects.toThrow("\"password\" length must be at least 6 characters long");
    })

    test('try invalid password (is not be empty)', async() => {
        const obj12 = { email: 'hasherama8@gmail.com', name: 'Andriy', password: '' };
        await expect(signUpSchema.validateAsync(obj12)).rejects.toThrow("\"password\" is not allowed to be empty");
    })
})
