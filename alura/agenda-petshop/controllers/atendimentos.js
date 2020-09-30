const AtendimentoModel = require('../models/Atendimento');

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send('atendimentos/get');
    });

    app.post('/atendimentos', (req, res) => {
        console.log(req.body);
        const ado = new AtendimentoModel();
        ado.adiciona(req.body);
        res.send('atendimento/post');
    });
}