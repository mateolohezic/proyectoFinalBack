const User = require('../model/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const claveToken = process.env.CLAVE;
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
    const users = await User.find({})
    res.status(200).send(users);
}

const getUserEspecifico = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)
    res.status(200).send(user);
}

const crearUser = async (req, res) => {
    const { username, name, surname, age, email, password, country } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const saltRound = 15; 
    const passwordEncripted = bcrypt.hashSync(password, saltRound);
    const status = "pendiente";
    const rol = "user";
    const nuevoUser = new User({
        username,
        name,
        surname,
        age,
        email,
        password: passwordEncripted,
        country,
        status,
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

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const status = "pendiente";
    const rol = "user";
    await User.findOneAndUpdate(username, {
        name,
        surname,
        age,
        email,
        password,
        country,
        status,
        rol
    })
    res.status(200).send(`Se actualizo el usuario con éxito.`)
};

const estadoUser = async (req, res) => {
    const { id, status  } = req.body
    await User.findByIdAndUpdate(id, {
        status
    })
    res.status(200).send(`Se actualizo el usuario con éxito.`)
};

const loginUser = async (req, res) => {
    const { username, password } = req.body

    try{
        const user = await User.findOne({"username": username})
        if (user && user.status === "activo") {
            if (bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({user}, claveToken , { expiresIn : "1h"})
                res.status(200).json({user,token})
          
              } else {
                res.status(206).send({message : 'Contraseña incorrecta'})
              }
            } else {
              res.status(206).send({message : 'Usuario no encontrado'})
        }
    }
    catch(error){
        console.log(error);
    }
};


module.exports = { crearUser, getUser, deleteUser, patchUser, getUserEspecifico, estadoUser, loginUser }