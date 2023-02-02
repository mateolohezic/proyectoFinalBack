const Juego = require('../model/juegos');

const getJuegos = async (req, res) => {
    const juegos = await Juego.find({})
    res.json(juegos);
    res.status(200).send("Se obtuvieron los datos con éxito.");
}

const crearJuego = async (req, res) => {
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
}

const deleteJuego = async (req, res) => {
    await Juego.findByIdAndDelete(req.params.userId);
    res.status(200).send(`Se elimino el juego con éxito.`)
}

module.exports = { crearJuego, getJuegos, deleteJuego }