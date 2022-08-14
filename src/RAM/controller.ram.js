const { handlerRAM } = require('./handler.ram');

const controllerRAM = async () => {
  const freeMemory = await handlerRAM();
  res.send(freeMemory);
  res.end();
}

module.exports = { controllerRAM }

