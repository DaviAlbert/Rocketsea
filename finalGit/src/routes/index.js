const express = require('express');
const UsersController = require('../database/controller/UserController.js'); // Importa o controlador
const usersRoutes = require('./user.routes.js')

const Routes = express.Router();

// Rota para criar um usuário
Routes.use('/users', usersRoutes);
Routes.post('/users', usersRoutes);

module.exports = Routes;