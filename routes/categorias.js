const express = require('express');
const route = express.Router();
const { crearCategoria, getCategoria, patchCategoria, deleteCategoria, getCategoriaEspecifica } = require('../controllers/categorias');
const { jwtValidator } = require('../middleware/jwt');
const { body } = require('express-validator');


route.get('/obtener-categorias', getCategoria);

route.get('/:id', getCategoriaEspecifica);

route.post('/crear-categoria',
body('name').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 20}).withMessage('Campo invalido'),
crearCategoria)

route.patch(`/editar-categoria`, 
body('name').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 20}).withMessage('Campo invalido'),
patchCategoria);

route.delete(`/eliminar-categoria`, deleteCategoria);

route.patch(`/error`, (req, res) => {
    res.status(404).send(`Error`)
});

module.exports = route;