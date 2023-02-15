const Compra = require('../model/compra');

const getCompra = async (req, res) => {
    const compras = await Compra.find({})
    res.status(200).send(compras);
}

const crearCompra = async (req, res) => {
    const { idCompra, items } = req.body;
    const nuevaCompra = new Compra({
        idCompra,
        items,
        pay: false
    })
    await nuevaCompra.save()
    res.status(200).send(`Se agrego la compra con éxito.`)
}

const deleteCompra = async (req, res) => {
    const { id } = req.body
    await Compra.findByIdAndDelete(id);
    res.status(200).send(`Se elimino la compra con éxito.`)
}

const estadoCompra = async (req, res) => {
    const { id } = req.body
    await Compra.findOneAndUpdate(id, {
        pay: true
    })
    res.status(200).send(`Se actualizo el estado de la compra con éxito.`)
};

module.exports = { getCompra, crearCompra, deleteCompra, estadoCompra }