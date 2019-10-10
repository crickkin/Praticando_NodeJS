const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json()); //Para indicar para aplicação que ela precisará receber/enviar requisições json

/* Conectando com banco de dados */
mongoose.connect("mongodb+srv://crickkin:petricor63@cluster0-dviqe.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
requireDir('./src/models');

app.use('/api', require('./src/routes'));
app.listen(3005);