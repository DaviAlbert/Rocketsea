const { Router } = require('express');
const ReceitaController = require('../database/controller/receitaController');  // Caminho correto para o controlador

const receitasRoutes = Router();
const receitasController = new ReceitaController();

// Definindo a rota POST para criar um novo usuário
receitasRoutes.post('/', receitasController.create);
receitasRoutes.put('/:id', receitasController.update);
receitasRoutes.delete('/delete/:id', receitasController.Delete);
receitasRoutes.get('/show/:id', receitasController.show);

module.exports = receitasRoutes;
