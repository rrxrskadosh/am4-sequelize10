const express = require("express");
const morgan = require("morgan");

//Routers
const clientsRouter = require("./routes/clients");
const membershipRouter = require("./routes/memberships");
const paymentsRouter = require("./routes/payments");
//dotenv Para los archivos .env
require("dotenv").config();

//Models

const { clients, payments, memberships } = require("./models");

//variable de entorno PORT
const PORT = process.env.PORT || 9000; //Estamos llamando PORT de forma dinámica

const app = express();
//configuracion de express para poder interpretar los datos que son enviados en formato JSON
app.use(express.json()); 

app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("Hola mundo!");
});

//Router Clients
app.use(clientsRouter);

//Router Memberships
app.use(membershipRouter);

//Router Payments
app.use(paymentsRouter);

app.listen(PORT, () => {
    console.log("Corriendo el servidor sobre el puerto", PORT);
});
