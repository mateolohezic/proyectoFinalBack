const express = require('express');
const route = express.Router();
const { getConsulta, crearConsulta, deleteConsulta } = require('../controllers/consultas');
const { jwtValidator } = require('../middleware/jwt');
const { body } = require('express-validator');


route.get('/obtener-consulta', getConsulta);

route.post('/crear-consulta', 
body('name').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('surname').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('email').trim().escape().isEmail().not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('consulta').trim().escape().not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
crearConsulta)

route.delete(`/eliminar-consulta`, jwtValidator, deleteConsulta);

route.patch(`/error`, (req, res) => {
    res.status(404).send(`Error`)
});

module.exports = route;