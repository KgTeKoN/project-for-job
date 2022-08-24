const { handlerRAM } = require('./handler.ram');

const controllerRAM = async (req, res) => {
  const freeMemory = await handlerRAM();
  res.send(freeMemory);
  res.end();
}

module.exports = { controllerRAM }

