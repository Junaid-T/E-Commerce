const express = require("express");
const orderController = require("../Controllers/orderController");
const verify = require("../Utilities/verifyToken");

const router = express.Router();

router.route("/orderhistory").get(verify, orderController.getOrders);

router.route("/").post(verify, orderController.addOrder);

module.exports = router;
