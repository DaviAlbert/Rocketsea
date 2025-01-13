const AppError = require("../utils/AppError")

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    response.status(201).json({ name, email, password })
    if(!name){
      throw new AppError("Nome é obrigatório")
    }
  }
}

module.exports = UsersController