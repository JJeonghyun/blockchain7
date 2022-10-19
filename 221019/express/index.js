const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "public")));
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
    name: "session-cookie",
  })
);
// http://localhost:8080/testing?lunch=asd
// http // > 프로토콜
// localhost > 주소, IP 주소/도메인(DNS)
// :8080 > 포트번호
// /testing -> 라우터
// ?lunch=asd > input 값에 넣은 텍스트, 대망의 쿼리

app.use("/testing", (req, res) => {
  // app.get("/testing", (req, res) => {
  // app.post("/testing", (req, res) => {
  console.log(req.query.lunch);
  res.end(`<div>${req.query.lunch}</div>`);
  // get 메서드 형식을 사용할 때는 query, 즉 쿼리스트링을 사용한다
  // post 메서드 형식을 사용할 때는 body로 데이터에 접근한다
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});
app.listen(app.get("port"), () => {
  console.log(`포트 번호 ${app.get("port")}로 접속 완료`);
});
