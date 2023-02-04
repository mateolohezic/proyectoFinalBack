const Juego = require('../model/juegos');

const getJuegos = async (req, res) => {
    const juegos = await Juego.find({})
    res.status(200).send(juegos);
}

const getJuegoEspecifico = async (req, res) => {
    const { id } = req.params;
    const juego = await Juego.findById(id)
    res.status(200).send(juego);
}

const crearJuego = async (req, res) => {
    const { title, developer, categorie, date, price, synopsis, image1, image2, image3, image4 } = req.body;
    const favorite = false;
    const published = true;
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
        favorite,
        published
    })
    await nuevoJuego.save()
    res.status(200).send(`Se creo el juego con éxito.`)
}

const deleteJuego = async (req, res) => {
    const { id } = req.body
    await Juego.findByIdAndDelete(id);
    res.status(200).send(`Se elimino el juego con éxito.`)
}

const patchJuego = async (req, res) => {
    const { id, title, developer, categorie, date, price, synopsis, image1, image2, image3, image4  } = req.body
    const favorite = false;
    const published = true;
    await Juego.findByIdAndUpdate(id, {
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
        favorite,
        published
    })
    res.status(200).send(`Se actualizo el juego con éxito.`)
};


module.exports = { crearJuego, getJuegos, deleteJuego, patchJuego, getJuegoEspecifico }