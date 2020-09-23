module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.json({ message: 'ok' });
    });

    app.get('/books', (req, res) => {
        return res.marko(
            require('../views/books/list/list.marko'),
            {
                books: [
                    {
                        id: 1,
                        title: 'Fundamentos de Node'
                    },
                    {
                        id: 2,
                        title: 'Node avançado'
                    }
                ]
            }
        );
    });
};