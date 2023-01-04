import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
import config from "./config/key.js";
const app = express();
const port = 8080;
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//application/json
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("몽고 연결..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/register", (req, res) => {
  //회원 가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} 실행`);
});
