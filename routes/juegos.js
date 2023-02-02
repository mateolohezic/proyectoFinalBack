const express = require('express');
const route = express.Router();
const Juego = require('../model/juegos');

route.get('/obtener-juego', (req, res) => {   
        res.status(200).send("Se obtuvieron los datos con éxito.");
    });

route.post('/crear-juego', async (req, res) => {
    const { title, developer, categorie, date, price, synopsis, image1, image2, image3, image4, rating } = req.body;
    const nuevoJuego = new Juego({
        title,
        developer,
        categorie,
        date,
        price,
        synopsis,
        image1,
        image2,
        image3,
        image4,
        rating
    })
    await nuevoJuego.save()
    res.status(200).send(`Se creo el juego con éxito.`)
});

route.patch(`/editar-juego`, (req, res) => {
    res.status(200).send(`Se edito el juego con éxito.`)
});

route.delete(`/eliminar-juego`, (req, res) => {
    res.status(200).send(`Se elimino el juego con éxito.`)
});

route.patch(`/error`, (req, res) => {
    res.status(404).send(`Error`)
});

module.exports = route;