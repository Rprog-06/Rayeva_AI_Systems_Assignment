const express = require("express");
const router = express.Router();

const { generateProductData } = require("../controller/productController");

router.post("/generate", generateProductData);

module.exports = router;