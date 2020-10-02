class Tables {
    init(connection) {
        this._connection = connection;
        this._criarAtendimentos();
    }

    _criarAtendimentos() {
        const sql = `
        CREATE TABLE IF NOT EXISTS Atendimentos (
            id          INT         NOT NULL AUTO_INCREMENT,
            cliente     VARCHAR(50) NOT NULL,
            pet         VARCHAR(20)     NULL,
            servico     VARCHAR(20) NOT NULL,
            status      VARCHAR(20) NOT NULL,
            data        DATETIME    NOT NULL,
            dataCriacao DATETIME    NOT NULL,
            observacoes TEXT            NULL,
            PRIMARY KEY (id)
        )`;
        this._connection.query(sql, erro => {
            if(erro) 
                console.log(erro); 
        });
    }
}

module.exports = new Tables;