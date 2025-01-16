const create = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    admin BOOLEAN
  )

    CREATE TABLE IF NOT EXISTS receita (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    name VARCHAR,
    email VARCHAR,
    descricao VARCHAR,
    foto VARCHAR NULL,
    FOREIGN KEY (userId) REFERENCES users(id)
  )
`;

module.exports = create;