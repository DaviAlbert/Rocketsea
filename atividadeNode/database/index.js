const sqliteConnection = require('./create'); // Função de conexão com o banco
const createUsers = require('./createUsers/createUsers'); // Arquivo com a criação de usuários
const createMovieNotes = require('./createUsers/createMovies'); // Arquivo com a criação de filmes
const createMovieTags = require('./createUsers/createTags'); // Arquivo com a criação de tags de filmes

async function migrationsRun() {
  const database = await sqliteConnection();

  try {
    // Criando as tabelas uma por uma
    await database.run(createUsers);         // Criação da tabela 'users'
    await database.run(createMovieNotes);    // Criação da tabela 'movie_notes'
    await database.run(createMovieTags);     // Criação da tabela 'movie_tags'

    console.log('Migrações executadas com sucesso');
  } catch (error) {
    console.error('Erro ao executar as migrações:', error);
  }
}

module.exports = migrationsRun;