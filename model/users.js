const { Schema, model } = require('mongoose');

const user = new Schema({
    username: String,
    name: String,
    surname: String,
    age: Number,
    email: String,
    password: String,
    country: String,
    state: String,
    rol: String
})

module.exports = model (`User`, user)