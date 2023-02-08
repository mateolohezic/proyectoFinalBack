const { Schema, model } = require('mongoose');

const comentario = new Schema({
    username: String,
    game: String,
    comentario: String
})

module.exports = model (`Comentario`, comentario)