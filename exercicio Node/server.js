require("express-async-errors"); 
const AppError = require('./appError');
const http = require('http');
const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const database = require('./database/db'); // Aqui é o arquivo que inicializa o banco de dados.
const app = express();
const port = 3000;
const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

database(); // Conecta ao banco de dados.

app.use(express.json());
app.use(express.static(__dirname));

// Envia o index.html quando o usuário acessar a raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/index.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.css'));
});
app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.js'));
});

// Endpoint POST para adicionar um usuário ao banco de dados
app.post('/add-user', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Altere conforme sua configuração
    password: '', // Altere conforme sua configuração
    database: 'your_database_name' // Altere conforme o nome do seu banco
  });
  
  connection.execute(query, [name, email, password], (err, results) => {
    if (err) {
      console.error('Erro ao inserir usuário:', err);
      return res.status(500).json({ error: 'Erro ao inserir usuário no banco de dados' });
    }
    res.status(201).json({ message: 'Usuário inserido com sucesso!', userId: results.insertId });
  });
  connection.end();
});

// Rodando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port})`);
});