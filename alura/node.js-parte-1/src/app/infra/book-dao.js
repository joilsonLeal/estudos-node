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
                    resolve();
                }
            )
        });
    }

    selectById(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM books
                    WHERE id = ?
                `,
                [id],
                (erro, livro) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o livro!');
                    }
                    return resolve(livro);
                }
            );
        });
    }

    update(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE books SET
                title = ?,
                price = ?,
                description = ?
                WHERE id = ?
            `,
            [
                book.title,
                book.price,
                book.description,
                book.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o livro!');
                }

                resolve();
            });
        });
    }


    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                    DELETE 
                    FROM books
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o livro!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = LivroDao;