const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncWrapper = require("../Utilities/AsyncWrapper");

exports.registerUser = asyncWrapper(async (req, res, next) => {
  const newUser = await User.create({
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = jwt.sign({ _id: newUser.id }, process.env.TOKEN);
  res.header("token", token).status(200).json({
    status: "success",
    message: "User Registered",
  });
});

exports.loginUser = asyncWrapper(async (req, res, next) => {
  const findUser = await User.findOne({ email: req.body.email });
  const validPassword = await bcrypt.compare(
    req.body.password,
    findUser.password
  );

  if (validPassword) {
    const token = jwt.sign({ _id: findUser.id }, process.env.TOKEN);
    res.header("token", token).status(200).json({
      status: "success",
      message: "Logged In",
    });
  }
});
