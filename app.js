const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
app.use(express.json());
app.use(cors());
require('./database/db');

const CrearJuego = require('./routes/juegos');

app.use('/', CrearJuego);

app.listen(port, () =>  {
    console.log(`Estamos trabajando en el puerto ${port}`);
});