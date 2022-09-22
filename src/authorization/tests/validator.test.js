const { signUpSchema } = require('../validate.schema')

describe('validate schema registration', () => {
    let email1 = 'hasherama8@gmail.com';
    let email2 = 'aaa@com';
    let email3 = '';
    let email4 = 34;
    let email5 = 'aaa@gmail.m';
    let name1 = 'Andriy';
    let name2 = 'aa';
    let name3 = 456;
    let name4 = 'Христофор';
    let name5 = '';
    let password1 = 'xq27031993';
    let password2 = 27031993;
    let password3 = '12345';
    let password4 = '';

    test('validate correct data', async () => {
        const obj1 = { email: email1, name: name1, password: password1 };
        const result = await signUpSchema.validateAsync(obj1);
        expect(result).toEqual(obj1)
    })

    test('try invalid email (valid email)', async () => {
        const obj2 = { email: email2, name: name1, password: password1 };
        let result;
        try {
            result = await signUpSchema.validateAsync(obj2);
        } catch (e) {
            result = e.message;
        }
        expect(result).toEqual("\"email\" must be a valid email");
    })

    test('try invalid email (is not be empty)', async () => {
        const obj3 = { email: email3, name: name1, password: password1 };
        let result;
        try{
            result = await signUpSchema.validateAsync(obj3);
        } catch (e) {
            result = e.message;
        }
        expect(result).toEqual("\"email\" is not allowed to be empty");
    })

    test('try invalid email (must be a string)', async () => {
        const obj4 = { email: email4, name: name1, password: password1 };
        let result;
        try{
            result = await signUpSchema.validateAsync(obj4);
        } catch (e) {
            result = e.message;
        }
        expect(result).toEqual("\"email\" must be a string");
    })

    test('try invalid email (valid email)', async () => {
        const obj5 = { email: email5, name: name1, password: password1 };
        let result;
        try{
            result = await signUpSchema.validateAsync(obj5);
        } catch (e) {
            result = e.message;
        }
        expect(result).toEqual("\"email\" must be a valid email");;
    })


    test('try invalid name (length must be at least 3 characters long)', async() => {
        const obj6 = { email: email1, name: name2, password: password1 };
        let result;
        try{
            result = await signUpSchema.validateAsync(obj6);
        } catch (e) {
            result = e.message;
        }
        expect(result).toEqual("\"name\" length must be at least 3 characters long");
    })

    test('try invalid name (must be a string)', async() => {
        const obj7 = { email: email1, name: name3, password: password1 };
        let result;
        try{
            result = await signUpSchema.validateAsync(obj7);
        } catch (e) {
            result = e.message;
        }
        expect(result).toEqual("\"name\" must be a string");
    })

    test('try invalid name (must only contain alpha-numeric characters)', async() => {
        const obj8 = { email: email1, name: name4, password: password1 };
        let result;
        try{
            result = await signUpSchema.validateAsync(obj8);
        } catch (e) {
            result = e.message;
        }
        expect(result).toEqual("\"name\" must only contain alpha-numeric characters");
    })

    test('try invalid name (is not be empty)', async() => {
        const obj9 = { email: email1, name: name5, password: password1 };
        let result;
        try{
            result = await signUpSchema.validateAsync(obj9);
        } catch (e) {
            result = e.message;
        }
        expect(result).toEqual("\"name\" is not allowed to be empty");
    })

    test('try invalid password (must be a string)', async() => {
        const obj10 = { email: email1, name: name1, password: password2 };
        let result;
        try{
            result = await signUpSchema.validateAsync(obj10);
        } catch (e) {
            result = e.message;
        }
        expect(result).toEqual("\"password\" must be a string");
    })

    test('try invalid password (length must be at least 6 characters long)', async() => {
        const obj11 = { email: email1, name: name1, password: password3 };
        let result;
        try{
            result = await signUpSchema.validateAsync(obj11);
        } catch (e) {
            result = e.message;
        }
        expect(result).toEqual("\"password\" length must be at least 6 characters long");
    })

    test('try invalid password (is not be empty)', async() => {
        const obj12 = { email: email1, name: name1, password: password4 };
        let result;
        try{
            result = await signUpSchema.validateAsync(obj12);
        } catch (e) {
            result = e.message;
        }
        expect(result).toEqual("\"password\" is not allowed to be empty");
    })
})
