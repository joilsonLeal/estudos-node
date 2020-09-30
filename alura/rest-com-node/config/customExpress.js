const express = require('express');
const consign = require('consign');
const bodyParsert = require('body-parser');

module.exports = () => {
    const app = express();

    app.use(bodyParsert.urlencoded({extended: true}));
    app.use(express.json());

    consign()
        .include('controllers')
        .into(app);

    app.use((req, res, next) => {
        res.send('Not found');
    });

    app.use((err, req, res, next) => {
        res.send(err);
    });

    return app;
}