const express = require('express');
const route = express.Router();
const { getComentarios, crearComentarios, deleteComentarios } = require('../controllers/comentarios');


route.get('/obtener-comentario', getComentarios);

route.post('/crear-comentario', crearComentarios)

route.delete(`/eliminar-comentario`, deleteComentarios);

route.patch(`/error`, (req, res) => {
    res.status(404).send(`Error`)
});

module.exports = route;