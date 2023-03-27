const jwt = require("jsonwebtoken");
const generateToken = async (id) => {
  return jwt.sign({ _id: id }, process.env.JWT_SECRET);
};
module.exports = generateToken;
