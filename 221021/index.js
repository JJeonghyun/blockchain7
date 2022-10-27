const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const boardList = [];
const userList = [];
let checkId = false;

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "web")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "todaylunch",
  })
);

app.get("/api/user", (req, res) => {
  console.log(req.query.loginIdx);
  res.send({
    status: 200,
    list: userList,
    indx: req.query.loginIdx,
  });
});

app.post("/api/user/add", (req, res) => {
  if (!userList.length) {
    userList.push(req.body);
  } else {
    for (let i = 0; i < userList.length; i++) {
      checkId = false;
      if (userList[i].id == req.body.id) {
        checkId = true;
        return res.send({
          status: 200,
          data: "이미 등록된 회원입니다!",
          list: userList,
          checked: checkId,
          id: req.body.id,
        });
      } else {
        userList.push(req.body);
        return res.send({
          status: 200,
          data: "회원가입 성공!",
          list: userList,
          checked: checkId,
          id: req.body.id,
        });
      }
    }
  }
  res.send({
    status: 200,
    data: "회원가입 성공!",
    list: userList,
    checked: checkId,
    id: req.body.id,
  });
});
app.post("/api/user/info", (req, res) => {
  let checkNum = 0;
  let message = "";
  console.log(userList);
  userList.forEach((elem, index) => {
    if (elem.id === req.body.id && elem.pw === req.body.pw) {
      checkNum = index;
      message = "로그인 완료";
    }
  });
  res.send({
    data: "로그인 완료",
    list: userList,
    index: checkNum,
    message: message,
  });
});

// -------------------------------------------------------------------------------

app.post("/api/board/add", (req, res) => {
  boardList.unshift(req.body);
  console.log(boardList);
  console.log(boardList.length);
  res.send({
    status: 200,
    data: "정상 입력 완료",
    uptime: boardList[req.body.index].uptime,
    idx: req.body.index,
  });
});
app.post("/api/board/delete", (req, res) => {
  boardList.splice(+req.body.count * 5 + +req.body.num, 1);
  res.send({ status: 200, data: "delete" });
});
app.post("/api/board/update", (req, res) => {
  boardList[+req.body.count * 5 + +req.body.num].text = req.body.text;
  boardList[+req.body.count * 5 + +req.body.num].uptime = req.body.uptime;
  res.send({ status: 200, data: "update" });
});
app.get("/api/board", (req, res) => {
  console.log(req.query.count);
  res.send({
    status: 200,
    list: boardList.slice(+req.query.count * 5, (+req.query.count + 1) * 5),
    maxCount:
      parseInt(
        (boardList.length ? boardList.length - 1 : boardList.length) / 5
      ) + 1,
  });
});

app.listen(app.get("port"), () => {
  console.log("Server Open");
});
