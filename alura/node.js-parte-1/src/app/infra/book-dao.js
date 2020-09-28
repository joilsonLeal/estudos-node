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
}

module.exports = LivroDao;