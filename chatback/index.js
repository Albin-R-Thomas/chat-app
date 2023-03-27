const express = require("express");
require("dotenv").config();
const chats = require("./data/chata-dummy");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const connectDB = require("./db/db");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hi");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.use("/api/user", userRoutes);
app.listen(5000, () => {
  console.log(`server started at 5000`);
});
