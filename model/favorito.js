const { Schema, model } = require('mongoose');

const favorito = new Schema({
    title: String,
    price: Number,
    image1: String,
    idJuego: String
})

module.exports = model (`Favorito`, favorito)