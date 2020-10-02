const pagamentos = require('../controllers/pagamentos');
const express = require('express');

module.exports = () => {
    const app = express();
    pagamentos(app);
    return app;
}
