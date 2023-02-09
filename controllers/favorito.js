const Favorito = require('../model/favorito');

const getFavorito = async (req, res) => {
    const favorito = await Favorito.find({})
    res.status(200).send(favorito);
}

const crearFavorito = async (req, res) => {
    const { title, price, image1, idJuego } = req.body;

    const nuevoFavorito = new Favorito({
        title,
        price,
        image1,
        idJuego
    })
    await nuevoFavorito.save()
    res.status(200).send(`Se añadió a favoritos con éxito.`)
}

const deleteFavorito = async (req, res) => {
    const { id } = req.body
    
    await Favorito.findByIdAndDelete( id);
    res.status(200).send(`Se elimino de favoritos con éxito.`)
}

module.exports = { getFavorito, crearFavorito, deleteFavorito }