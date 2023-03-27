const express = require("express");
const registerUser = require("../controllers/registerUser");
const router = express.Router();
router.route("/login").post(registerUser);
module.exports = router;
