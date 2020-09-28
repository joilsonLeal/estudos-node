const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    full_name VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL
)
`;

const INSERT_USER_1 = 
`
INSERT INTO users (
    full_name, 
    email,
    password
) SELECT 'Gabriel Leite', 'gabriel@alura.com.br', '123' WHERE NOT EXISTS (SELECT * FROM users WHERE email = 'gabriel@alura.com.br')
`;

const BOOKS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL, 
    price REAL NOT NULL,
    description TEXT DEFAULT ('') NOT NULL
)
`;

const INSERT_BOOK_1 = 
`
INSERT INTO books (
    title,
    price,
    description
) SELECT 'Node na prática', 30.0, 'Como desenvolver com Node.' WHERE NOT EXISTS (SELECT * FROM books WHERE title = 'Node na prática')
`;

const INSERT_BOOK_2 = 
`
INSERT INTO books (
    title, 
    price,
    description
) SELECT 'JavaScript na prática', 40.0, 'Como desenvolver com JavaScript.' WHERE NOT EXISTS (SELECT * FROM books WHERE title = 'JavaScript na prática')
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USERS_SCHEMA);
    bd.run(INSERT_USER_1);
    bd.run(BOOKS_SCHEMA);
    bd.run(INSERT_BOOK_1);
    bd.run(INSERT_BOOK_2);

    bd.each("SELECT * FROM users", (err, user) => {
        console.log('User: ');
        console.log(user);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;