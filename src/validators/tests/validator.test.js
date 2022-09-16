const { signupSchema } = require('../schema')

describe('validator body tests', () => {
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
    let arrResult = [];
    const obj1 = { email: email1, name: name1, password: password1 };
    const obj2 = { email: email2, name: name1, password: password1 };
    const obj3 = { email: email3, name: name1, password: password1 };
    const obj4 = { email: email4, name: name1, password: password1 };
    const obj5 = { email: email5, name: name1, password: password1 };
    const obj6 = { email: email1, name: name2, password: password1 };
    const obj7 = { email: email1, name: name3, password: password1 };
    const obj8 = { email: email1, name: name4, password: password1 };
    const obj9 = { email: email1, name: name5, password: password1 };
    const obj10 = { email: email1, name: name1, password: password2 };
    const obj11 = { email: email1, name: name1, password: password3 };
    const obj12 = { email: email1, name: name1, password: password4 };

    beforeAll(async () => {
        try {
            arrResult[0] = await signupSchema.validateAsync(obj1);
        } catch (e) {
            arrResult[0] = e.message;
        }

        try {
            arrResult[1] = await signupSchema.validateAsync(obj2);
        } catch (e) {
            arrResult[1] = e.message;
        }

        try{
             arrResult[2] = await signupSchema.validateAsync(obj3);
        } catch (e) {
            arrResult[2] = e.message;
        }

        try{
             arrResult[3] = await signupSchema.validateAsync(obj4);
        } catch (e) {
            arrResult[3] = e.message;
        }

        try{
            arrResult[4] = await signupSchema.validateAsync(obj5);
        } catch (e) {
            arrResult[4] = e.message;
        }

        try{
             arrResult[5] = await signupSchema.validateAsync(obj6);
        } catch (e) {
            arrResult[5] = e.message;
        }

        try{
            arrResult[6] = await signupSchema.validateAsync(obj7);
        } catch (e) {
            arrResult[6] = e.message;
        }

        try{
            arrResult[7] = await signupSchema.validateAsync(obj8);
        } catch (e) {
            arrResult[7] = e.message;
        }

        try{
            arrResult[8] = await signupSchema.validateAsync(obj9);
        } catch (e) {
            arrResult[8] = e.message;
        }

        try{
            arrResult[9] = await signupSchema.validateAsync(obj10);
        } catch (e) {
            arrResult[9] = e.message;
        }

        try{
            arrResult[10] = await signupSchema.validateAsync(obj11);
        } catch (e) {
            arrResult[10] = e.message;
        }

        try{
            arrResult[11] = await signupSchema.validateAsync(obj12);
        } catch (e) {
            arrResult[11] = e.message;
        }
    })

    test('validate true data', () => {
        expect(arrResult[0]).toEqual(obj1)
    })

    test('validate email', () => {
        expect(arrResult[1]).toEqual("\"email\" must be a valid email");
        expect(arrResult[2]).toEqual("\"email\" is not allowed to be empty");
        expect(arrResult[3]).toEqual("\"email\" must be a string");
        expect(arrResult[4]).toEqual("\"email\" must be a valid email");
    })

    test('validate name', () => {
        expect(arrResult[5]).toEqual("\"name\" length must be at least 3 characters long");
        expect(arrResult[6]).toEqual("\"name\" must be a string");
        expect(arrResult[7]).toEqual("\"name\" must only contain alpha-numeric characters");
        expect(arrResult[8]).toEqual("\"name\" is not allowed to be empty");
    })

    test('validate password', () => {
        expect(arrResult[9]).toEqual("\"password\" must be a string");
        expect(arrResult[10]).toEqual("\"password\" length must be at least 6 characters long");
        expect(arrResult[11]).toEqual("\"password\" is not allowed to be empty");
    })
})
