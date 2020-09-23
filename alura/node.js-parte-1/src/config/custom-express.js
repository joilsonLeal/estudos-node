require('marko/node-require').install();
require('marko/express');

const express = require('express');
const routes = require('../app/routes/routes');

const app = express();
app.use(express.json());

routes(app);

module.exports = app;