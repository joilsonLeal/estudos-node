const templates = require('../views/tamplates');

class BaseControlador {

    static rotas() {
        return {
            home: '/'
        }
    }

    home() {
        return function(req, resp) {
            resp.marko(
                templates.base.home
            );
        };
    }
}

module.exports = BaseControlador;