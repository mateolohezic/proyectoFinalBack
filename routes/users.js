const express = require('express');
const route = express.Router();
const { crearUser, getUser, patchUser, deleteUser } = require('../controllers/users');


route.get('/obtener-users', getUser);

route.post('/crear-user', crearUser)

route.patch(`/editar-user`, patchUser);

route.delete(`/eliminar-user`, deleteUser);

module.exports = route;