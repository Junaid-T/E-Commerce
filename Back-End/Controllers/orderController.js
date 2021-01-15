const User = require("../Models/userModel");
const asyncWrapper = require("../Utilities/AsyncWrapper");

exports.getOrders = asyncWrapper(async (req, res, next) => {
  const findUser = await User.findOne({ _id: req._id });
  res.status(200).json({
    status: "success",
    data: findUser.orderHistory,
  });
});

exports.addOrder = asyncWrapper(async (req, res, next) => {
  const data = req.body;
  findUser = await User.findOneAndUpdate(
    { _id: req._id },
    {
      $push: {
        orderHistory: data,
      },
    }
  );

  res.status(200).json({
    status: "success",
    data: findUser.orderHistory[findUser.orderHistory.length - 1]._id,
  });
});
