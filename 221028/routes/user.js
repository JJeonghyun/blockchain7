const Cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { User } = require("../models/index.js");

router.post("/regist", async (req, res) => {
  try {
    const tempUser = await User.findOne({ where: { userId: req.body.id } });
    if (tempUser) {
      res.status(500);
      res.send({ message: "exist ID" });
      return;
    }
    const { id, pw, name, className } = req.body;
    await User.create({
      userId: id,
      userPw: Cryptojs.SHA256(pw).toString(),
      name,
      class: className,
    });
    res.send();
  } catch (err) {
    res.status(500);
    res.send();
  }
});

router.post("/login", async (req, res) => {
  try {
    const tempUser = await User.findOne({ where: { userId: req.body.id } });
    if (!tempUser) {
      res.status(500);
      res.send({ message: "no ID" });
      return;
    }
    if (tempUser.userPw == Cryptojs.SHA256(req.body.pw).toString()) {
      res.cookie(
        "seed",
        jwt.sign(
          { id: tempUser.id, name: tempUser.name },
          process.env.JWT_KEY,
          {
            algorithm: "HS256",
            expiresIn: "30m",
            issuer: "jjh",
          }
        )
      );
      res.send({ name: tempUser.name });
      return;
    }

    res.status(500);
    res.send({ message: "wrong password" });
  } catch (err) {
    res.status(500);
    res.send();
  }
});
router.get("/logout", (req, res) => {
  res.clearCookie("seed");
  res.end();
});
module.exports = router;
