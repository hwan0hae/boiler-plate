const express = require("express");
const app = express();
const port = 8080;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://eoghkszn:reggs%401367@boilerplate.runrcen.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("몽고 연결..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`http://localhost:${port} 실행`);
});
