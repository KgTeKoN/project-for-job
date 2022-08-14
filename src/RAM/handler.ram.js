const os = require('os');

const handlerRAM = async () => {
  let freeMemory = await os.freemem();
  return { freeMemory }
}

module.exports = { handlerRAM };
