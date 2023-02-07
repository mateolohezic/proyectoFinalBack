const express = require('express');
const route = express.Router();
const { crearUser, getUser, patchUser, deleteUser, getUserEspecifico, estadoUser } = require('../controllers/users');


route.get('/obtener-users', getUser);

route.get('/:id', getUserEspecifico);

route.post('/crear-user', crearUser)

route.patch(`/editar-user`, patchUser);

route.patch(`/estado-user`, estadoUser);

route.delete(`/eliminar-user`, deleteUser);

module.exports = route;