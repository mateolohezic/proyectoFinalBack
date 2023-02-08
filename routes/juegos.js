const express = require('express');
const route = express.Router();
const { crearJuego, getJuegos, patchJuego, deleteJuego, getJuegoEspecifico } = require('../controllers/juegos');
const { jwtValidator } = require('../middleware/jwt');
const { body } = require('express-validator');

route.get('/obtener-juegos', getJuegos);

route.get('/:id', getJuegoEspecifico);

route.post('/crear-juego',
body('title').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('developer').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('date').trim().escape().isInt({ min: 1950, max:2024}).not().isEmpty().withMessage('Campo invalido'),
body('price').trim().escape().isInt({ min: 1, max:99999}).not().isEmpty().withMessage('Campo invalido'),
body('synopsis').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
body('image1').trim().isAlpha('es-ES',).not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
body('image2').trim().isAlpha('es-ES',).not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
body('image3').trim().isAlpha('es-ES',).not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
body('image4').trim().isAlpha('es-ES',).not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
crearJuego)

route.patch(`/editar-juego`, 
body('title').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('developer').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('date').trim().escape().isInt({ min: 1950, max:2024}).not().isEmpty().withMessage('Campo invalido'),
body('price').trim().escape().isInt({ min: 1, max:99999}).not().isEmpty().withMessage('Campo invalido'),
body('synopsis').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
body('image1').trim().isAlpha('es-ES',).not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
body('image2').trim().isAlpha('es-ES',).not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
body('image3').trim().isAlpha('es-ES',).not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
body('image4').trim().isAlpha('es-ES',).not().isEmpty().isLength({min: 1, max: 1000}).withMessage('Campo invalido'),
patchJuego);

route.delete(`/eliminar-juego`, deleteJuego);

route.patch(`/error`, (req, res) => {
    res.status(404).send(`Error`)
});

module.exports = route;