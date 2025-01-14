const express = require('express');
const UsersController = require('../controller/controller.js'); // Importa o controlador
const usersRoutes = require('./user.routes.js')

const routes = express.Router();

// Rota para criar um usuário
routes.post('/users', usersRoutes);

module.exports = routes;