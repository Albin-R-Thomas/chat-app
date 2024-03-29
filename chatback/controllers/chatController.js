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

const createGroupChat = asyncHandler(async (req, res) => {
    if (!req.body.users || !req.body.name) {
        return res.status(400).send({ message: "Please fill all the details" });
    }
    const { users, name } = req.body
    if (users.length < 2) {
        return res.status(400).send({ message: "A group must have more than 2 users" });
    }
    users.push(req.user)
    try {
        const groupChat = await Chat.create({
            chatName: name,
            users: users,
            isGroupChat: true,
            groupAdmin: req.user
        })
        return res.status(400).send(groupChat)
    } catch (error) {
        return res.status(400).send(error)
    }
})

const renameGroupChat = asyncHandler(async (req, res) => {
    try {
        const { chatId, chatName } = req.body
        const renamedGroup = await Chat.findByIdAndUpdate({
            _id: chatId
        },
            {
                $set: {
                    chatName: chatName
                }

            }
        ).populate("users", "-password").populate("latestMessage").populate("groupAdmin", "-password")
        return res.status(200).send(renamedGroup)
    }
    catch (error) {
        return res.status(400).send(error)
    }

})

const addToGroup = asyncHandler(async (req, res) => {
    try {
        const { chatId, userId } = req.body
        const addedToGroup = await Chat.findByIdAndUpdate({
            _id: chatId
        },
            {
                $addToSet: {
                    usesrs: userId
                }

            },
            { new: true }
        ).populate("users", "-password").populate("latestMessage").populate("groupAdmin", "-password")
        return res.status(200).send(addedToGroup)
    }
    catch (error) {
        return res.status(400).send(error)
    }
})

const removeFromGroup = asyncHandler(async (req, res) => {
    try {
        const { chatId, userId } = req.body
        const removeFromGroup = await Chat.findByIdAndUpdate({
            _id: chatId
        },
            {
                $pull: {
                    usesrs: userId
                }

            },
            { new: true }
        ).populate("users", "-password").populate("latestMessage").populate("groupAdmin", "-password")
        return res.status(200).send(removeFromGroup)
    }
    catch (error) {
        return res.status(400).send(error)
    }
})
module.exports = { accessChat, fetchChat, createGroupChat, renameGroupChat, removeFromGroup, addToGroup }