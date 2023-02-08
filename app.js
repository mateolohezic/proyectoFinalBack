const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
app.use(express.json());
app.use(cors());
require('./database/db');

const juegos = require('./routes/juegos');
const users = require('./routes/users');
const categorias = require('./routes/categorias');
const comentarios = require('./routes/comentarios');
const carrito = require('./routes/carrito');


app.use('/', juegos);
app.use('/users', users);
app.use('/categorias', categorias);
app.use('/comentarios', comentarios);
app.use('/carrito', carrito);

app.listen(port, () =>  {
    console.log(`Estamos trabajando en el puerto ${port}`);
});