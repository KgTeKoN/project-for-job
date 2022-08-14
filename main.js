const port = require('./config.js');
const express = require('express');
const routes = require('./index.routes.js');

const app = express();
app.use(routes);

app.listen(port, () => console.log('Server start'));
