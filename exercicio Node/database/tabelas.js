const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    avatar VARCHAR NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// Comando para inserir um usuário
const insertUser = `
  INSERT INTO users (name, email, password, avatar)
  VALUES ('John Doe', 'john.doe@example.com', '123456', 'avatar.png');
`;

module.exports = { createUsers, insertUser };