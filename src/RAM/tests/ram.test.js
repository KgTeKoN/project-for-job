const { handlerRAM } = require('../handler.ram');
const os = require('os');

describe('RAM', () => {

    let result;

    beforeAll(async () => {
        result = await handlerRAM();
    })

    test('property freeMemory should be Number greater than 0 and less than total memory', () => {
        expect(result.freeMemory).toBeGreaterThan(0);
        expect(result.freeMemory).toBeLessThan(os.totalmem())
    })
})
