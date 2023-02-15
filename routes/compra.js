const express = require('express');
const route = express.Router();
const { getCompra, crearCompra, deleteCompra, estadoCompra } = require('../controllers/compra');
const { jwtValidator } = require('../middleware/jwt');


route.get('/obtener-compra', getCompra);

route.post('/crear-compra', crearCompra)

route.delete(`/eliminar-compra`, jwtValidator, deleteCompra);

route.patch(`/pagar-compra`, estadoCompra);

route.patch(`/error`, (req, res) => {
    res.status(404).send(`Error`)
});

module.exports = route;