const { Schema, model } = require('mongoose');

const compra = new Schema({
    idCompra: String,
    items: Array,
    pay: Boolean
})

module.exports = model (`Compra`, compra)