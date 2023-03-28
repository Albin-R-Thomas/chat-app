const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const registerUser = asyncHandler(async (req, res) => {
  const { name, password, email, pic } = req.body;
  if (!name || !password || !email) {
    res.status(400);
    throw new Error("Please Enter all the required fields");
  }
  const userExists = await User.findOne({
    email: email,
  });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 8);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  }
});

module.exports = registerUser;