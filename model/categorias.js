const { Schema, model } = require('mongoose');

const categoria = new Schema({
    name: String,
    published: Boolean
})

module.exports = model (`Categoria`, categoria)