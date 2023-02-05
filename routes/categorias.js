const express = require('express');
const route = express.Router();
const { crearCategoria, getCategoria, patchCategoria, deleteCategoria, getCategoriaEspecifica } = require('../controllers/categorias');


route.get('/obtener-categorias', getCategoria);

route.get('/:id', getCategoriaEspecifica);

route.post('/crear-categoria', crearCategoria)

route.patch(`/editar-categoria`, patchCategoria);

route.delete(`/eliminar-categoria`, deleteCategoria);

route.patch(`/error`, (req, res) => {
    res.status(404).send(`Error`)
});

module.exports = route;