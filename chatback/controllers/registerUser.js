const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const registerUser = asyncHandler(async (req, res) => {
  const pic = req?.file?.filename?req.file.filename:null
  const { name, password, email } = req.body;
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

const authUser = asyncHandler(async (req, res) => {
  const { password, email} = req.query;
  if (!password || !email) {
    res.status(400);
    throw new Error("Please Enter all the required fields");
  }
  const userExists = await User.findOne({
    email: email,
  });
  if (!userExists) {
    res.status(400);
    throw new Error("User doesn't exists");
  }
  const hashedPassword = await bcrypt.compare(password, userExists.password);
  if(!hashedPassword){
    res.status(400);
    throw new Error("Invalid credentials");
  }
  else{
    res.status(201).json({
      _id: userExists._id,
      name: userExists.name,
      email: userExists.email,
      pic: userExists.pic,
      token: generateToken(userExists._id),
    });
  }
});

module.exports = {registerUser,authUser};
