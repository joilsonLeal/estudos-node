const LivroControlador = require('./livro-controlador');

const templates = require('../views/tamplates');

class BaseControlador {

    static rotas() {
        return {
            home: '/',
            login: '/login'
        }
    }

    home() {
        return function(req, resp) {
            resp.marko(
                templates.base.home
            );
        };
    }

    login() {
        return function(req, resp) {
            resp.marko(
                templates.base.login
            );
        };
    }

    efetuarLogin() {
        return function(req, resp, next) {
            const { passport } = req;

            
            passport.authenticate('local', (erro, usuario, informacao) => {
                if(informacao) {
                    return resp.marko(templates.base.login);
                }

                if(erro) {
                    return next(erro);
                }

                req.login(usuario, (erro) => {
                    if(erro) {
                        return next(erro);
                    }

                    return resp.redirect(LivroControlador.rotas().lista);
                });
            })(req, resp, next);
        };
    }
}

module.exports = BaseControlador;