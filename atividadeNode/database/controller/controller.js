const { hash, compare } = require('bcryptjs');
const sqliteConnection = require('../create.js');

class UsersController {
  // Criar um novo usuário
  async create(request, response) {
    const { name, email, password } = request.body;
    const hashedPassword = await hash(password, 8);
    const database = await sqliteConnection();

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso. Faça o login com a outra senha ou troque de email.");
    }

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return response.status(201).json({ message: "Usuário criado com sucesso" });
  }

  // Atualizar informações de um usuário
  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);
    const NovoEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    if (NovoEmail && NovoEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso.");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError("Você precisa informar a senha antiga para definir a nova senha");
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.");
      }
      user.password = await hash(password, 8);
    }

    await database.run(
      `UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, id]
    );

    return response.json({ message: "Usuário atualizado com sucesso" });
  }

  // Criar um novo filme
  async createMovie(request, response) {
    const { title, description, rating } = request.body;
    const { user_id } = request.params; // O ID do usuário que cria o filme

    const database = await sqliteConnection();

    // Verificar se o usuário existe
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);
    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    // Inserir o filme (nota de filme)
    const result = await database.run(
      "INSERT INTO movie_notes (title, description, rating, user_id) VALUES (?, ?, ?, ?)",
      [title, description, rating, user_id]
    );

    return response.status(201).json({ message: "Filme criado com sucesso", movie_id: result.lastID });
  }

  // Adicionar tags a um filme
  async addTags(request, response) {
    const { name } = request.body;
    const { movie_id, user_id } = request.params; // IDs do filme e do usuário

    const database = await sqliteConnection();

    // Verificar se o filme existe
    const movie = await database.get("SELECT * FROM movie_notes WHERE id = (?)", [movie_id]);
    if (!movie) {
      throw new AppError("Filme não encontrado");
    }

    // Verificar se o usuário existe
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);
    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    // Adicionar a tag ao filme
    await database.run(
      "INSERT INTO movie_tags (note_id, user_id, name) VALUES (?, ?, ?)",
      [movie_id, user_id, name]
    );

    return response.status(201).json({ message: "Tag adicionada ao filme com sucesso" });
  }

  // Deletar filme e suas tags associadas
  async deleteMovie(request, response) {
    const { movie_id, user_id } = request.params; // IDs do filme e do usuário

    const database = await sqliteConnection();

    // Verificar se o filme existe
    const movie = await database.get("SELECT * FROM movie_notes WHERE id = (?) AND user_id = (?)", [movie_id, user_id]);
    if (!movie) {
      throw new AppError("Filme não encontrado ou o filme não pertence ao usuário");
    }

    // Deletar tags associadas ao filme
    await database.run("DELETE FROM movie_tags WHERE note_id = ?", [movie_id]);

    // Deletar o filme
    await database.run("DELETE FROM movie_notes WHERE id = ?", [movie_id]);

    return response.json({ message: "Filme e suas tags deletados com sucesso" });
  }

  // Deletar uma tag
  async deleteTag(request, response) {
    const { tag_id, user_id } = request.params; // IDs da tag e do usuário

    const database = await sqliteConnection();

    // Verificar se a tag existe
    const tag = await database.get("SELECT * FROM movie_tags WHERE id = (?) AND user_id = (?)", [tag_id, user_id]);
    if (!tag) {
      throw new AppError("Tag não encontrada ou a tag não pertence ao usuário");
    }

    // Deletar a tag
    await database.run("DELETE FROM movie_tags WHERE id = ?", [tag_id]);

    return response.json({ message: "Tag deletada com sucesso" });
  }
}

module.exports = UsersController;