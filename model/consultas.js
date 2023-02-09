const { Schema, model } = require('mongoose');

const consulta = new Schema({
    name: String,
    surname: String,
    email: String,
    consulta: String
})

module.exports = model (`Consulta`, consulta)