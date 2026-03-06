const express = require("express");

const router = express.Router();

const {createProposal} = require("../controller/proposalController");

router.post("/generate",createProposal);

module.exports = router;