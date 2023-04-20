const express = require("express");
require("dotenv").config();
const chats = require("./data/chata-dummy");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const cors = require("cors");
const connectDB = require("./config/db/db");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hi");
});
app.use("/api/chat", chatRoutes);
app.use("/api/user", userRoutes);
app.listen(5000, () => {
  console.log(`server started at 5000`);
});
