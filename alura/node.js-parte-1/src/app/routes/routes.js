const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.json({ message: 'ok' });
    });

    app.get('/books', (req, res) => {

        db.all('SELECT * FROM Books', (err, data) => {
            if(err)
                return res.json({message: erro});
            
            return res.marko(
                require('../views/books/list/list.marko'),
                {
                    books: data
                }
            );
        });

        
    });
};