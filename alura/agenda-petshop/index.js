const customExpress = require('./config/customExpress');
const conexao = require('./infra/connection');

conexao.connect(erro => {
    if(erro)
        console.log(erro);
    else {
        const app = customExpress();
        app.listen(3000, () => console.log('Server is running...')); 
    }
});

