const express = require("express");
const multer = require("multer")
const {registerUser,authUser} = require("../controllers/registerUser");
const router = express.Router();
router.route("/login").get(authUser);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './profileImage')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })
router.post("/signup",upload.single('profileImage'),registerUser);
module.exports = router;
