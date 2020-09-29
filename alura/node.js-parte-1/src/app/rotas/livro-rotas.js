const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();

const Livro = require('../modelos/livro');

const BaseControlador = require('../controladores/base-controlador');

module.exports = (app) => {
    const rotasLivro = LivroControlador.rotas();

    app.use(rotasLivro.autenticadas, function(req, resp, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            resp.redirect(BaseControlador.rotas().login);
        }
    });

    app.get(rotasLivro.lista, livroControlador.lista());

    app.get(rotasLivro.edicao, livroControlador.formularioEdicao());
    
    app.route(rotasLivro.cadastro)
     .get(livroControlador.formularioCadastro())
     .put(livroControlador.edita())
     .post(Livro.validacoes(), livroControlador.cadastra());

    app.delete(rotasLivro.delecao, livroControlador.remove());
};