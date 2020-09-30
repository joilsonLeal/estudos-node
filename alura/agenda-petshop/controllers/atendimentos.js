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

    app.patch('/atendimentos/:id', (req, res) => {
        const atendimento = req.body;
        const id = req.params;
        ado.altera(id, atendimento, res);
    });

    app.delete('/atendimentos/:id', (req, res) => {
        const id = req.params;
        ado.delete(id, res);
    });
}