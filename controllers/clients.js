const { clients } = require("../models");

//Add new Client
const addClient = async (req, res) => {
    const data = req.body;
    try{
        //create = Metodo de Sequelize para Crear UN CLIENTE de la Tabla
        const results = await clients.create(data);
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

//Get Clients
const getClients = async (req,res) => {
    try{
        //findAll = Metodo de Sequelize para OBTENER todos los clientes de la Tabla
        const results = await clients.findAll(); 
        res.json({results})
    }catch(error){
        console.log(error)
    }
}

//Get Client by ID
const getClientById = async (req,res) => {
    try{
        //findOne = Metodo de Sequelize para OBTENER UN Cliente por ID
        const results = await clients.findOne({where: {id: req.params.id}}); 
        res.json({results})
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    addClient,
    getClients,
    getClientById
}