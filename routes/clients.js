const express = require("express");

const { addClient, getClients, getClientById } = require("../controllers/clients");

const router = express.Router();

router.post("/clients", addClient);
router.get("/clients", getClients);
router.get("/clients/:id", getClientById);

module.exports = router; //export default router