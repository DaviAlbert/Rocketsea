const { hash, compare } = require('bcryptjs');
const sqliteConnection = require('../create/createdb');

class UsersController {
  async create(request, response) {
    const { userId, name, descricao, foto } = request.body;
    const database = await sqliteConnection();
    const verificarNome = await database.get("SELECT * FROM receita WHERE name = (?)", [name]);

    if (verificarNome) {
      throw new AppError("Este Nome já está em uso. Insira outro nome para poder adicionar a receita.");
    }

    await database.run(
      "INSERT INTO users (userId, name, descricao, foto) VALUES (?, ?, ?, ?)",
      [userId, name, descricao, foto]
    );

    return response.status(201).json({ message: "Usuário criado com sucesso" });
  }

  async update(request, response) {
    const { userId, name, descricao, foto } = request.body;
    const { id } = request.params;
    const database = await sqliteConnection();
    const receita = await database.get("SELECT * FROM receita WHERE id = (?)", [id]);

    if (!receita) {
      throw new AppError("Receita não encontrada");
    }

    user.userId = userId ?? user.userId;
    user.name = name ?? user.name;
    user.descricao = descricao ?? user.descricao;
    user.foto = foto ?? user.foto;

    await database.run(
      `UPDATE receita SET
        userId = ?,
        name = ?,
        descricao = ?,
        foto = ?
      WHERE id = ?`,
      [user.userId, user.name, user.descricao, user.foto, id]
    );

    return response.json({ message: "Usuário atualizado com sucesso" });
  }
  async Delete(request, response) {
    const { id } = request.params;
    const database = await sqliteConnection();
    const receita = await database.get("SELECT * FROM receita WHERE id = (?)", [id]);

    if (!receita) {
      throw new AppError("Receita não encontrada");
    }

    await database.run(`DELETE * FROM receita SET WHERE id = ?`, [id]);

    return response.json({ message: "Receita deletada com sucesso" });
  }

  async show(request, response) {
    const { name } = request.body;
    const database = await sqliteConnection();
    const receita = await database.get("SELECT * FROM receita WHERE name = (?)", [name]);

    if (!receita) {
      throw new AppError("Receita não encontrada");
    }

    return response.json(receita);
  }
}

module.exports = UsersController;