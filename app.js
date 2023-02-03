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


app.use('/', crearJuego);
app.use('/', crearUser);

app.listen(port, () =>  {
    console.log(`Estamos trabajando en el puerto ${port}`);
});