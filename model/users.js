const { Schema, model } = require('mongoose');

const user = new Schema({
    username: String,
    name: String,
    surname: String,
    age: Number,
    email: String,
    password: String,
    country: String,
    status: String,
    rol: String,
    favorites: Array,
    cart: Array
})

module.exports = model (`User`, user)