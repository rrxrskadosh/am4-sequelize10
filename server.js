const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

//variable de entorno PORT
const PORT = process.env.PORT; //Estamos llamando PORT de forma dinámica

const app = express();

app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("Hola mundo!");
});

app.listen(PORT, () => {
    console.log("Corriendo el servidor sobre el puerto", PORT);
});
