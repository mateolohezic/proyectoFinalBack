const { Schema, model } = require('mongoose');

const carrito = new Schema({
    title: String,
    price: Number,
    image1: String,
})

module.exports = model (`Carrito`, carrito)