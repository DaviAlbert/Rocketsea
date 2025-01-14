// migrationsRun.js
const sqliteConnection = require('./CreateDatabase.js');
const { createUsers, insertUser } = require('./tabelas.js');

async function migrationsRun() {
  const schemas = [
    createUsers, // Cria a tabela
    insertUser   // Insere o usuário
  ].join(' ');

  sqliteConnection()
    .then(db => db.exec(schemas))
    .then(() => console.log('Tabela criada e usuário inserido com sucesso!'))
    .catch(error => console.error('Erro ao executar migrações:', error));
}

module.exports = migrationsRun;