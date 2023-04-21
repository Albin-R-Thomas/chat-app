const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const { fetchChat, accessChat, createGroupChat } = require('../controllers/chatController')
const router = express.Router()
router.route("/").get(protect, fetchChat).post(protect, accessChat)
router.route("/group").post(protect, createGroupChat)
// router.route("/rename").patch(protect,renameGroupChat)
// router.route("/groupremove").delete(protect,removeFromGroup)
// router.route("/groupadd").post(protect,addToGroup)
module.exports = router