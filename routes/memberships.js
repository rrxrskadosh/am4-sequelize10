const express = require("express");

const { addMembership, getMemberships, getMembershipById } = require("../controllers/memberships");

const router = express.Router();

router.post("/memberships", addMembership);
router.get("/memberships",getMemberships);
router.get("/memberships/:id", getMembershipById);

module.exports = router; //export default router