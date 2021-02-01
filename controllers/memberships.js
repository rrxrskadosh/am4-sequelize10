const { memberships } = require("../models");

//Add new Membership
const addMembership = async (req, res) => {
    const data = req.body;
    data.date = new Date(); //Agregamos la propiedad fecha con el valor del dia de hoy
    try{
        //create = Metodo de Sequelize para Crear UNA membresia en la Tabla
        const results = await memberships.create(data);
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

//Get Clients
const getMemberships = async (req,res) => {
    try{
        //findAll = Metodo de Sequelize para OBTENER todas las membresias de la Tabla
        const results = await memberships.findAll(); 
        res.json({results})
    }catch(error){
        console.log(error)
    }
}

//Get Client by ID
const getMembershipById = async (req,res) => {
    try{
        //findOne = Metodo de Sequelize para OBTENER UNA membresia por ID
        const results = await memberships.findOne({where: {id: req.params.id}}); 
        res.json({results})
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    addMembership,
    getMemberships,
    getMembershipById
}