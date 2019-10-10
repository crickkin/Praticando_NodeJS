const express = require('express');
const routes = express.Router();

const LoginController = require('./controllers/LoginController');
const BookController = require('./controllers/BookController');

routes.get('/', (req, res) => {
    return res.send('Yowzah');
});

//Rotas de Login
routes.get('/login/:id', LoginController.auth);
routes.post('/register', LoginController.register);

//Rotas de Livro
routes.post('/book', BookController.create);
routes.get('/book', BookController.read);
routes.put('/book/:id', BookController.update);
routes.delete('/book/:id', BookController.delete);

module.exports = routes;