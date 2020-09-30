const customExpress = require('./config/customExpress');
const conexao = require('./infra/connection');
const Tables = require('./infra/tables');

conexao.connect(erro => {
    if(erro)
        console.log(erro);
    else {
        Tables.init(conexao);
        const app = customExpress();
        app.listen(3000, () => console.log('Server is running...')); 
    }
});

