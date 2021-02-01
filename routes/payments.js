const express = require("express");

const { addPayment, getPayments } = require("../controllers/payments");

const router = express.Router();

router.post("/payments", addPayment);
router.get("/payments", getPayments);

module.exports = router; //export default router