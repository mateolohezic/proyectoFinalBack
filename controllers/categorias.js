const Categoria = require('../model/categorias');

const getCategoria = async (req, res) => {
    const categorias = await Categoria.find({})
    res.status(200).send(categorias);
}

const getCategoriaEspecifica = async (req, res) => {
    const { id } = req.params;
    const categoria = await Categoria.findById(id)
    res.status(200).send(categoria);
}

const crearCategoria = async (req, res) => {
    const { title, name } = req.body;
    const published = true;
    const nuevaCategoria = new Categoria({
        name,
        published
    })
    await nuevaCategoria.save()
    res.status(200).send(`Se creo la categoría con éxito.`)
}

const deleteCategoria = async (req, res) => {
    const { id } = req.body
    await Categoria.findByIdAndDelete(id);
    res.status(200).send(`Se elimino la categoría con éxito.`)
}

const patchCategoria = async (req, res) => {
    const { id, name, published  } = req.body
    await Categoria.findByIdAndUpdate(id, {
        name,
        published
    })
    res.status(200).send(`Se actualizo la categoría con éxito.`)
};


module.exports = { crearCategoria, getCategoria, deleteCategoria, patchCategoria, getCategoriaEspecifica }