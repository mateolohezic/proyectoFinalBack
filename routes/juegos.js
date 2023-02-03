const express = require('express');
const route = express.Router();
const { crearJuego, getJuegos, patchJuego, deleteJuego } = require('../controllers/juegos');


route.get('/obtener-juego', getJuegos);

route.post('/crear-juego', crearJuego)

route.patch(`/editar-juego`, patchJuego);

route.delete(`/eliminar-juego`, deleteJuego);

route.patch(`/error`, (req, res) => {
    res.status(404).send(`Error`)
});

module.exports = route;