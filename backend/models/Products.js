const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  subCategory: String,
  tags: [String],
  sustainabilityFilters: [String]
});

module.exports = mongoose.model("Product", productSchema);