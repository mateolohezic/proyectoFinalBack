// const Pago = require('../model/mercadopago');
const { validationResult } = require('express-validator');
const mercadopago = require("mercadopago");
require('dotenv').config();

const TokenMercadoPago = process.env.TOKENMERCADOPAGO;

mercadopago.configure({
    access_token: TokenMercadoPago,
  });
  

const generarPago = async (req, res) => {
    const { title, price, user } = req.body;
    
    let preference = {
        binary_mode: true,
        items:[
            {
                title: title,
                unit_price: price,
                quantity: 1,
            }],
        payer: 
            {
                name: user
            },
        back_urls: {
            success: "http://localhost:3000/Success",
            failure: "http://localhost:3000/Failure"
          },
        auto_return: "approved"
      };
      
      mercadopago.preferences.create(preference)
    .then(function (response) {
      res.status(200).json({global: response.body})
    })
    .catch((error) => {
      res.status(500).json({global: error})
    })
}
module.exports = { generarPago }