const express = require('express');
const route = express.Router();
const { crearJuego, getJuegos, patchJuego, deleteJuego, getJuegoEspecifico } = require('../controllers/juegos');


route.get('/obtener-juegos', getJuegos);

route.get('/:id', getJuegoEspecifico);

route.post('/crear-juego', crearJuego)

route.patch(`/editar-juego`, patchJuego);

route.delete(`/eliminar-juego`, deleteJuego);

route.patch(`/error`, (req, res) => {
    res.status(404).send(`Error`)
});

module.exports = route;