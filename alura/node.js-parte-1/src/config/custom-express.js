require('marko/node-require').install();
require('marko/express');

const express = require('express');
const routes = require('../app/routes/routes');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.use('/static', express.static('src/app/public'));

app.use(express.json());

routes(app);

module.exports = app;