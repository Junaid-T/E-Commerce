const express = require("express");
const productController = require("../Controllers/productController");

const router = express.Router();

router.route("/getproducts").get(productController.getProducts);

module.exports = router;
