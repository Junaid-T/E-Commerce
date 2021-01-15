const Products = require("../Models/productModel");
const asyncWrapper = require("../Utilities/AsyncWrapper");

exports.getProducts = asyncWrapper(async (req, res, next) => {
  const products = await Products.find({});
  res.status(200).json({
    status: "success",
    data: products,
  });
});
