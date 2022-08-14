const os = require('os');

const handlerRAM = async () => {
  const freeMemory = os.freemem();
  return { freeMemory }
}

module.exports = { handlerRAM };
