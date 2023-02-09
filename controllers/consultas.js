const Consulta = require('../model/consultas');
const { validationResult } = require('express-validator');

const getConsulta = async (req, res) => {
    const consultas = await Consulta.find({})
    res.status(200).send(consultas);
}

const crearConsulta = async (req, res) => {
    const { name, surname, email, consulta } = req.body;
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const nuevaConsulta = new Consulta({
        name,
        surname,
        email,
        consulta
    })
    await nuevaConsulta.save()
    res.status(200).send(`Se creo la consulta con éxito.`)
}

const deleteConsulta = async (req, res) => {
    const { id } = req.body
    await Consulta.findByIdAndDelete(id);
    res.status(200).send(`Se elimino la consulta con éxito.`)
}

module.exports = { getConsulta, crearConsulta, deleteConsulta }