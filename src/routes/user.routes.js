const { Router } = require('express');
const UsersController = require('../database/controller/UserController');  // Caminho correto para o controlador

const usersRoutes = Router();
const usersController = new UsersController();

// Definindo a rota POST para criar um novo usuário
usersRoutes.post('/', usersController.create);
usersRoutes.put('/:id', usersController.update);
usersRoutes.delete('/delete/:id', usersController.Delete);
usersRoutes.get('/show/:id', usersController.show);

module.exports = usersRoutes;
