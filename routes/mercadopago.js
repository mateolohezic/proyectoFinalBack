const express = require('express');
const route = express.Router();
const { generarPago } = require('../controllers/mercadopago');

route.post('/generar-pago', generarPago);

module.exports = route;
