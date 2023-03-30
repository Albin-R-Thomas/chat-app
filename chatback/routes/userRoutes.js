const express = require("express");
const {registerUser,authUser} = require("../controllers/registerUser");
const router = express.Router();
router.route("/login").post(registerUser);
router.route("/signup").get(authUser);
module.exports = router;
