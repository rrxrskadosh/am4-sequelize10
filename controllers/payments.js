const { payments } = require("../models");

const addPayment = async (req, res) => {
    const data = req.body;
    // data.date = new Date(); //Agregamos la propiedad fecha con el valor del dia de hoy
    try{
        const results = await payments.create(data);
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

const getPayments = async (req, res) => {
    try{
        const results = await payments.findAll();
        res.json(results);
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    addPayment,
    getPayments
}