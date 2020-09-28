const BookDao = require('../infra/book-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.json({ message: 'ok' });
    });

    app.get('/books', (req, res) => {
        const bookDao = new BookDao(db);

        bookDao.list()
            .then(books => res.marko(
                require('../views/books/list/list.marko'),
                {
                    books
                }
            ))
            .catch(err => {
                console.log(err);
            });
    });
};