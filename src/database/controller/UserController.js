const { hash, compare } = require('bcryptjs');
const sqliteConnection = require('../create/createdb');

class UsersController {
  // Criar um novo usuário
  async create(request, response) {
    const { name, email, password, admin } = request.body;
    const hashedPassword = await hash(password, 8);
    const database = await sqliteConnection();
    const verificarEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if (verificarEmail) {
      throw new AppError("Este e-mail já está em uso. Faça o login com a outra senha ou troque de email.");
    }

    await database.run(
      "INSERT INTO users (name, email, password, admin) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, admin]
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
    }else if (NovoEmail && NovoEmail.id !== user.id) {
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
  async Delete(request, response) {
    const { id } = request.params;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    await database.run(`DELETE * FROM users SET WHERE id = ?`, [id]);

    return response.json({ message: "Usuário Deletado com sucesso" });
  }

  async show(request, response) {
    const { name } = request.body;
    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE name = (?)", [name]);

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    return response.json(user);
  }
}

module.exports = UsersController;