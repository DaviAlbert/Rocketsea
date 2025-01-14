const { Router } = require('express');
const UsersController = require('../controller/controller');  // Caminho correto para o controlador

const usersRoutes = Router();
const usersController = new UsersController();

// Definindo a rota POST para criar um novo usuário
usersRoutes.post('/', usersController.create);

// Definindo a rota PUT para atualizar informações do usuário
usersRoutes.put('/:id', usersController.update);

module.exports = usersRoutes;
