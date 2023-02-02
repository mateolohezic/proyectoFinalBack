const { Schema, model } = require('mongoose');

const juego = new Schema({
    title: String,
    developer: String,
    categorie: String,
    date: Number,
    price: Number,
    synopsis: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    rating: Number
})

module.exports = model (`Juego`, juego)