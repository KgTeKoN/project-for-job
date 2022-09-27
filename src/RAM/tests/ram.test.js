const { handlerRAM } = require('../handler.ram');
const os = require('os');

describe('RAM', () => {

    test('property freeMemory should be Number greater than 0 and less than total memory', async () => {
        const result = await handlerRAM();
        expect(result.freeMemory).toBeGreaterThan(0);
        expect(result.freeMemory).toBeLessThan(os.totalmem())
    })
})
