const AtendimentoModel = require('../models/Atendimento');
const ado = new AtendimentoModel();
module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        ado.lista(res);
    });

    app.get('/atendimentos/:id', (req, res) => {
        const { id } = req.params;
        ado.buscaPorId(id, res);
    });

    app.post('/atendimentos', (req, res) => {
        ado.adiciona(req.body, res);
    });
}