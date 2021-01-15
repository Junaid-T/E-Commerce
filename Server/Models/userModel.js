const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a valid email"],
    unique: [true, "This email is already in use"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
  },
  orderHistory: [
    {
      total: Number,
      items: Array,
      created_on: {
        type: String,
        default: new Date().toISOString(),
      },
    },
  ],
});

usersSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;

  next();
});

const User = mongoose.model("Users", usersSchema);

module.exports = User;
