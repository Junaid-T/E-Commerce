const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({}, { strict: false });

const Product = mongoose.model("Product", productsSchema, "Products");

module.exports = Product;
