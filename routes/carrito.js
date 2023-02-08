const express = require('express');
const route = express.Router();
const { getCarrito, crearCarrito, deleteCarrito } = require('../controllers/carrito');

route.get('/obtener-carrito', getCarrito);

route.post('/crear-carrito', crearCarrito)

route.delete(`/eliminar-carrito`, deleteCarrito);

module.exports = route;
