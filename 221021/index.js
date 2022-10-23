// 암호화 < 이론만 간단하게 용어
// 입력한 데이터를 다른 사람이 알수 없도록 변환한다
// 1234 => 암호화를 통해서 => aedsighasljdghsl213
// 복호화 : 암호화된 데이터를 원상복구 한다
// aedsighasljdghsl213 => 1234 (복호화 한다)
// 사용자가 입력한 데이터를 알 수 있어야 할까 ?
//  알면 안되는 것들도 있다 => 단방향 / 양방향 암호화
// 단방향은 암호화만 가능하다 (복호화가 안된다)
// 양방향은 암호화, 복호화 둘 다 가능하다

const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");

// const routes = require("./routes/index.js");
// const { route } = require("./routes/index.js");

const boardList = [];
const userList = [];
let checkId = false;
let userObj = {};

// fs.writeFile('./message.txt', JSON.stringify(userObj), 'utf8', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
//   console.log(JSON.stringify(userObj))
// });

// fs.readFile('./message.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   response.end(data);
// })

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

// app.use("/", (req, res, next) => {
//   console.log("url1 : " + req.url);
//   next();
// });
// app.use("/api", (req, res, next) => {
//   console.log("url2 : " + req.url);
//   next();
// });

// app.use("/api", routes);

app.get("/api/user", (req, res) => {
  res.send({
    status: 200,
    list: userList,
  });
});

app.post("/api/user/add", (req, res) => {
  if (!userList.length) {
    userList.push(req.body);
  } else {
    userList.forEach((elem) => {
      checkId = false;
      if (elem.id === req.body.id) {
        checkId = true;
      } else userList.push(req.body);
    });
  }
  res.send({
    status: 200,
    data: "회원가입 성공!",
    list: userList,
    checked: checkId,
    id: req.body.id,
  });
  // axios로 보낸 post형식 데이터를 받는다
});
app.post("/api/user/info", (req, res) => {
  let checkNum = 0;
  let message = "";
  userList.forEach((elem, index) => {
    if (req.body.id === elem.id) {
      checkNum = index;
    } else if (req.body.id !== elem.id) {
      message = "아이디가 틀렸습니다.";
    } else if (req.body.id === elem.id && req.body.pw !== elem.pw) {
      message = "비밀번호가 틀렸습니다.";
    } else {
      message = "아이디와 비밀번호가 맞지 않습니다.";
    }
  });
  res.send({
    status: 200,
    data: "로그인 완료",
    list: userList,
    index: checkNum,
    message: message,
  });
  // axios로 보낸 post형식 데이터를 받는다
});

// -------------------------------------------------------------------------------

app.post("/api/board/add", (req, res) => {
  boardList.unshift(req.body);
  console.log(boardList);
  console.log(boardList.length);
  res.send({ status: 200, data: "정상 입력 완료" });
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
    // nextList: boardList.slice(5, boardList.length),
    maxCount:
      parseInt(
        (boardList.length ? boardList.length - 1 : boardList.length) / 5
      ) + 1,
  });
});

app.listen(app.get("port"), () => {
  console.log("Server Open");
});
