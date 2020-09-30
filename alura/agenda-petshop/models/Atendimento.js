const moment = require('moment');
const conexao = require('../infra/connection');

class Atendimento {
    adiciona(atendimento, res) {
        const atendimentoDatado = {
            ...atendimento, 
            data: moment(atendimento.data, 'dd/mm/yyyy').format('YYYY-MM-DD HH:MM:SS'),
            dataCriacao: moment().format('YYYY-MM-DD HH:MM:SS'),
        };

        const dataEhValida = moment(atendimentoDatado.data).isSameOrAfter(atendimentoDatado.dataCriacao);
        const clienteEhValido = atendimentoDatado.cliente.length >= 5;

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual.'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Nome do cliente deve ter pelo menos 5 caracteres.'
            }
        ];

        const erros = validacoes.filter(validacao => !validacao.valido);

        if(erros.length)
            return res.status(400).json(erros);

        const sql = `INSERT INTO Atendimentos SET ?`;

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro)
                res.status(400).json(erro);
            else 
                res.status(201).json(resultados);
        });
    }
}

module.exports = Atendimento;