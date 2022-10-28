const jwt = require("jsonwebtoken");

const db = require("../models");

const router = require("express").Router();

const { User, Board } = require("../models/index.js");

router.use("/", (req, res, next) => {
  global.userId = "";
  try {
    // 정상적으로 실행되면 next()를 만나서 다음걸로 넘어가고, 오류가 생기면 err 발생하여 catch문으로 넘어간다.
    const tempUserInfo = jwt.verify(req.cookies.seed, process.env.JWT_KEY);
    global.userId = tempUserInfo.id;
    res.cookie(
      "seed",
      jwt.sign(
        { id: tempUserInfo.id, name: tempUserInfo.name },
        process.env.JWT_KEY,
        {
          algorithm: "HS256",
          expiresIn: "30m",
          issuer: "jjh",
        }
      )
    );
    next();
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get("/", async (req, res) => {
  const tempBoard = await Board.findAll({
    // attributes << 알아보자
    order: [["id", "DESC"]], // 정렬
    limit: 5, // 최대 개수
    offset: 3, // 시작 위치
  });
  res.send({ list: tempBoard });
});
router.post("/add", async (req, res) => {
  const tempUser = await User.findOne({
    where: {
      id: global.userId,
    },
  });
  const tempBoard = await Board.create(req.body);
  //   tempUser.getBoard(tempBoard);  // getBoard는 가져오는 메서드

  tempUser.addBoard(tempBoard); // addBoard는 추가하는 메서드
  //   db.Board.create({
  //     title: req.body.title,
  //     text: req.body.text,
  //   });
  res.end();
});
router.put("/update", async (req, res) => {
  await Board.update(
    {
      text: req.body.id,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.end();
});
router.delete("/delete", async (req, res) => {
  const tempBoard = await Board.findOne({
    where: {
      id: req.query.id,
    },
  });
  if (tempBoard.user_id === global.userId) {
    await Board.destroy({
      where: {
        id: req.query.id,
      },
    });
  }
  res.end();
});

module.exports = router;
