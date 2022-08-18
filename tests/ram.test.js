const { handlerRAM } = require('../src/RAM/handler.ram');
const os = require('os');

describe('RAM', () => {

    let result;

    beforeAll(async () => {
        result = await handlerRAM();
    })

    test('should be defined', () => {
        expect(result).toBeDefined();
    })

    test('should be object', () => {
        expect(typeof(result)).toBe('object');
    })

    test('should has property freeMemory', () => {
        expect(result.hasOwnProperty('freeMemory')).toEqual(true)
    })

    test('property freeMemory should be Number', () => {
        expect(typeof (result.freeMemory)).toEqual('number')
    })

    test('free memory should be grater than 0', () => {
        expect(result.freeMemory).toBeGreaterThan(0)
    })

    test('free memory should be less than total memory', () => {
        expect(result.freeMemory).toBeLessThan(os.totalmem())
    })

})
