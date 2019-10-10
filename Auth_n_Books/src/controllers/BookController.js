const mongoose = require('mongoose');

const Book = mongoose.model('Book');

module.exports = {
    async create(req, res) {
        const book = await Book.create(req.body);
        return res.json(book);
    },
    async read(req, res) {
        const book = await Book.find();
        return res.json(book);
    },
    async update(req, res) {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.json(book)
    },
    async delete(req, res) {
        await Book.findByIdAndDelete(req.params.id);
        return res.send();
    }
}