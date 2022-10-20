import express from "express";
import session from "express-session";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import listApi from "./routes/index.js";

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.set("port", process.env.PORT || 8080);
app.use("/", express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
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
    name: "session",
  })
);

app.use("/api/list", listApi);

app.listen(app.get("port"), () => {
  console.log("Server Open");
});
