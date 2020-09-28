class LivroDao {
    constructor(db) {
        this._db = db;
    }

    list() {
        return new Promise((resolve, reject) =>
            this._db.all(
                'SELECT * FROM books',
                (err, data) => {
                    if(err)
                        return reject(err);
                    else
                        return resolve(data);
                }
        ));
    }

    add(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO books (
                    title, 
                    price, 
                    description
                ) VALUES (?, ?, ?)`,
                [book.title, book.price, book.description],
                err => {
                    if(err)
                        return reject('Não foi possível adicionar o livro.');
                    return resolve();
                }
            )
        });
    }
}

module.exports = LivroDao;