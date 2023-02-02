const express = require('express');
const route = express.Router();
const { crearJuego, getJuegos, deleteJuego } = require('../controllers/juegos');


route.get('/obtener-juego', getJuegos);

route.post('/crear-juego', crearJuego)

route.patch(`/editar-juego`, (req, res) => {
    res.status(200).send(`Se edito el juego con éxito.`)
});

route.delete(`/:userId`, deleteJuego);

route.patch(`/error`, (req, res) => {
    res.status(404).send(`Error`)
});

module.exports = route;