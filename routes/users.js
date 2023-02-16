const express = require('express');
const route = express.Router();
const { crearUser, getUser, patchUser, deleteUser, getUserEspecifico, estadoUser, loginUser, agregarCarritos, agregarFavoritos, emailUser, restablecerContraseña } = require('../controllers/users');
const { jwtValidator } = require('../middleware/jwt');
const { body } = require('express-validator');


route.get('/obtener-users', getUser);

route.get('/:id', getUserEspecifico);

route.post('/crear-user', 
body('username').trim().escape().isAlphanumeric('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('name').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('surname').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('age').trim().escape().isNumeric().not().isEmpty().withMessage('Campo invalido'),
body('email').trim().escape().isEmail().not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('password').trim().escape().not().isEmpty().isLength({min: 6, max: 25}).withMessage('Campo invalido'),
body('country').trim().escape().not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
crearUser)

route.patch(`/editar-user`,
body('username').trim().escape().isAlphanumeric('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('name').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('surname').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('age').trim().escape().isInt({ min: 13, max:99}).not().isEmpty().withMessage('Campo invalido'),
body('email').trim().escape().isEmail().not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('password').trim().escape().not().isEmpty().isLength({min: 6, max: 25}).withMessage('Campo invalido'),
body('country').trim().escape().not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
patchUser);

route.patch(`/estado-user`, jwtValidator, estadoUser);

route.patch(`/agregar-carrito`, agregarCarritos);

route.patch(`/agregar-favorito`, agregarFavoritos);

route.delete(`/eliminar-user`, jwtValidator, deleteUser);

route.post(`/login-user`,
body('username').trim().escape().not().isEmpty().isLength({min: 1, max: 50}).withMessage('Campo invalido'),
body('password').trim().escape().not().isEmpty().isLength({min: 6, max: 25}).withMessage('Campo invalido'),
loginUser);

route.patch(`/restablecer-password`,
body('password').trim().escape().not().isEmpty().isLength({min: 6, max: 25}).withMessage('Campo invalido'),
restablecerContraseña);

route.post(`/restablecer-email`, emailUser)

module.exports = route;