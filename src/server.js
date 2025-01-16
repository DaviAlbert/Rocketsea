const express = require('express');
const http = require('http');
const PORT = 3000;
const migrationsRun = require('./database/create/createdb.js');
const routes = require('./database/routes/index.js');

const app = express();

migrationsRun();

app.use(express.json()); // Middleware para interpretar JSON no corpo das requisições
app.use(routes);

// Middleware de erro
app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});

// Utilizando o express para criar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});