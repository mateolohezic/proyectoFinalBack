const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
app.use(express.json());
app.use(cors());
require('./database/db');

const crearJuego = require('./routes/juegos');
const crearUser = require('./routes/users');
const crearCategoria = require('./routes/categorias');


app.use('/', crearJuego);
app.use('/users', crearUser);
app.use('/categorias', crearCategoria);

app.listen(port, () =>  {
    console.log(`Estamos trabajando en el puerto ${port}`);
});