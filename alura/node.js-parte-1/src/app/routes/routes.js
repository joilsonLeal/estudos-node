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
            .catch(err => console.log(err));
    });

    app.post('/books', (req, res) => {
        const bookDao = new BookDao(db);

        bookDao.add(req.body)
        .then(res.redirect('/books'))
        .catch(err => console.log(err));        
    });

    app.put('/books', (req, res) => {
        const bookDao = new BookDao(db);

        bookDao.update(req.body)
            .then(res.redirect('/books'))
            .catch(err => console.log(err));        
    });

    app.get('/books/form', (req, res) => {
        return res.marko(
            require('../views/books/form/form.marko'),
            { book: {}}
        )
    });

    app.delete('/books/:bookId', (req, res) => {
        const { bookId } = req.params;
        const bookDao = new BookDao(db);

        bookDao.remove(bookId)
            .then(() => res.status(200).end())
            .catch(err => console.log(err));    
    });

    app.get('/books/form/:id', (req, res) => {
        const { id } = req.params;

        const bookDao = new BookDao(db);
        bookDao.selectById(id)
            .then(book => 
                res.marko(
                    require('../views/books/form/form.marko'),
                    { book: book }
                )
            )
            .catch(err => console.log(err));
    });
};