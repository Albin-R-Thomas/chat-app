const express = require("express");
const chats = require("./data/chata-dummy");
const cors = require('cors');
const connectDB = require("./db/db");
connectDB()
const app = express();
app.use(cors())
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hi");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  res.send(req.id);
});
app.listen(5000, () => {
  console.log(`server started at 5000`);
});
