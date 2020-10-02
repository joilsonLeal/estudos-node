const express = require('express');
const consign = require('consign');
module.exports = () => {
    const app = express();

    consign()
        .include('controllers')
        .into(app);

    app.use(express.json());

    return app;
}
