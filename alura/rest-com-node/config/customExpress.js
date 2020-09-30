const express = require('express');
const consign = require('consign');


module.exports = () => {
    const app = express();

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