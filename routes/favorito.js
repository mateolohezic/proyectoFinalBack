const express = require('express');
const route = express.Router();
const { getFavorito, crearFavorito, deleteFavorito } = require('../controllers/favorito');

route.get('/obtener-favorito', getFavorito);

route.post('/crear-favorito', crearFavorito)

route.delete(`/eliminar-favorito`, deleteFavorito);

module.exports = route;
