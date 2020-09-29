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
        return function(req, resp) {
            resp.marko(
                templates.base.login
            );
        };
    }
}

module.exports = BaseControlador;