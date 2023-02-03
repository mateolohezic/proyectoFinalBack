const User = require('../model/users');

const getUser = async (req, res) => {
    const users = await User.find({})
    res.json(users);
    res.status(200).send("Se obtuvieron los datos con éxito.");
}

const crearUser = async (req, res) => {
    const { username, name, surname, age, email, password, country } = req.body;
    const state = "pendiente";
    const rol = "user";
    const nuevoUser = new User({
        username,
        name,
        surname,
        age,
        email,
        password,
        country,
        state,
        rol
    })
    await nuevoUser.save()
    res.status(200).send(`Se creo el usuario con éxito.`)
}

const deleteUser = async (req, res) => {
    const { id } = req.body
    await User.findByIdAndDelete(id);
    res.status(200).send(`Se elimino el usuario con éxito.`)
}

const patchUser = async (req, res) => {
    const { username, name, surname, age, email, password, country  } = req.body
    const state = "pendiente";
    const rol = "user";
    await User.findOneAndUpdate(username, {
        name,
        surname,
        age,
        email,
        password,
        country,
        state,
        rol
    })
    res.status(200).send(`Se actualizo el usuario con éxito.`)
};

module.exports = { crearUser, getUser, deleteUser, patchUser }