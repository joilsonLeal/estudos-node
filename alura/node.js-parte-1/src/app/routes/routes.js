module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.json({ message: 'ok' });
    });

    app.get('/books', (req, res) => {
        return res.marko(require('../views/books/list/list.marko'));
    });
};