require("dotenv").config();

const express = require("express");
const cors = require("cors");
//const mongoose = require("mongoose");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const proposalRoutes = require("./routes/proposalRoutes");



const app = express();
console.log("Starting server...");

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);
app.use("/api/proposals",proposalRoutes);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});