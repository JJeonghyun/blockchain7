const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./models/index.js");
const routes = require("./routes/index.js");

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
    name: "secret",
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB 연결");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/hi", routes);
// localhost:8080/hi >> routes에 접근 한다
// localhost:8080/hi/routes < 이게 아니다. 오해 하지 않길...

app.listen(app.get("port"), () => {
  console.log("Server Open");
});

// 서버를 배포할 때 : apache => node.js (redirect)
// node.js 자체에서 8080포트로 연다 < 로그 이상하게 남긴 상태로 올리면 안된다
