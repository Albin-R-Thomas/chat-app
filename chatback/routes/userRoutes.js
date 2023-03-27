const express = require("express");
const router = express.Router();
router.route("/login").post(registerUser);
module.exports = router;
