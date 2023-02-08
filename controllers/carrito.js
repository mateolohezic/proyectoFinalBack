const Carrito = require('../model/carrito');

const getCarrito = async (req, res) => {
    const carrito = await Carrito.find({})
    res.status(200).send(carrito);
}

const crearCarrito = async (req, res) => {
    const { title, price, image1} = req.body;

    const nuevoCarrito = new Carrito({
        title,
        price,
        image1
    })
    await nuevoCarrito.save()
    res.status(200).send(`Se añadió al carrito con éxito.`)
}

const deleteCarrito = async (req, res) => {
    const { id } = req.body
    
    await Carrito.findByIdAndDelete(id);
    res.status(200).send(`Se vació el carrito con éxito.`)
}

module.exports = { getCarrito, crearCarrito, deleteCarrito }