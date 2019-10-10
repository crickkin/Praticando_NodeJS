const mongoose = require('mongoose');

const Login = mongoose.model('Login');

const LoginController = {
    async auth (req, res) {
        const account = await Login.findById(req.params.id);

        return res.json(account);
    },

    async register (req, res) {
        const account = await Login.create(req.body);

        return res.json(account);
    }
}

module.exports = LoginController;