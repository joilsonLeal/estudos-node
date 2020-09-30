const moment = require('moment');
const conexao = require('../infra/connection');

class Atendimento {
    adiciona(atendimento, res) {
        const atendimentoDatado = {
            ...atendimento, 
            data: moment(atendimento.data, 'dd/mm/yyyy').format('YYYY-MM-DD HH:MM:SS'),
            dataCriacao: new Date(),
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

    lista(res) {
        const sql = `SELECT * FROM Atendimentos`;
        conexao.query(sql, (erro, resultados) => {
            if(erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultados);
        });
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id = ?`;
        conexao.query(sql, id, (erro, resultado) => {
            if(erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultado);
        });
    }
}

module.exports = Atendimento;