const express = require('express');
const route = express.Router();
const { getComentarios, crearComentarios, deleteComentarios } = require('../controllers/comentarios');
const { jwtValidator } = require('../middleware/jwt');
const { body } = require('express-validator');


route.get('/obtener-comentario', getComentarios);

route.post('/crear-comentario', 
body('username').trim().escape().not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('game').trim().escape().not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('comentario').trim().escape().not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
crearComentarios)

route.delete(`/eliminar-comentario`, jwtValidator, deleteComentarios);

route.patch(`/error`, (req, res) => {
    res.status(404).send(`Error`)
});

module.exports = route;