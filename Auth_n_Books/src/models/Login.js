const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    account: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    birthday: {
        type: Date
    }
})

mongoose.model('Login', LoginSchema);