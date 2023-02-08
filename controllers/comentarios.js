const Comentario = require('../model/comentarios');

const getComentarios = async (req, res) => {
    const comentarios = await Comentario.find({})
    res.status(200).send(comentarios);
}

const crearComentarios = async (req, res) => {
    const { username, game, comentario } = req.body;
    const nuevaComentario = new Comentario({
        username,
        game,
        comentario
    })
    await nuevaComentario.save()
    res.status(200).send(`Se creo el comentario con éxito.`)
}

const deleteComentarios = async (req, res) => {
    const { id } = req.body
    await Comentario.findByIdAndDelete(id);
    res.status(200).send(`Se elimino elcomentario con éxito.`)
}

module.exports = { getComentarios, crearComentarios, deleteComentarios }