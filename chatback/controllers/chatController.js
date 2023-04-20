const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");
const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body
    if (!userId) {
        console.log("userId params not found")
        res.status(400)
    }
    let chat = await Chat.find({
        isGroupChat: false,
        $and: [{ users: { $elemMatch: { $eq: req.user._id } } }, { users: { $elemMatch: { $eq: userId } } }]
    }).populate("users", "-password").populate("latestMessage")

    chat = await User.populate(chat, {
        path: 'latestMessage.sender',
        select: "_id,name,pic,email"
    })

    if (chat.length > 0) {
        res.send(chat[0])
    } else {
        try {
            const createdChat = await Chat.create({
                chatName: "sender",
                isGroupChat: false,
                users: [req.user._id, userId]
            })
            let fullChat = await Chat.findOne({ _id: createdChat._id }).populate("users", "-password").populate("latestMessage")
            res.send(fullChat)
        } catch (error) {
            res.send(error)
        }
    }
})


const fetchChat = asyncHandler(async (req, res) => {
    try {
        let chat = await Chat.find({
            users: { $elemMatch: { $eq: req.user._id } }
        }).populate("users", "-password").populate("latestMessage").populate("groupAdmin", "-password").sort({ updatedAt: -1 })
        chat = await User.populate(chat, {
            path: 'latestMessage.sender',
            select: "_id,name,pic,email"
        })
        res.send(chat)
    }
    catch (error) {
        res.send(error)
    }
})

module.exports = { accessChat, fetchChat }