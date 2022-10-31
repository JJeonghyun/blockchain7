const router = require("express").Router();
const { Table1, Table2 } = require("../models/index.js");
// const Table1 = require("../models/index.js").Table1;

// GET / POST / PUT / PATCH / DELETE
// 위 5가지 방식으로 통신을 REST API 라고 한다
// REST API = RESTFUL API = RESTFUL
// HTTP 통신, 즉 Web 통신을 할 때 기본적으로 사용되느 방식
// REST API vs GraphGL << 요런 놈도 있긴 하다

// CRUD => sequelize / mySQL(SQL문)
// Create ==> create / INSERT
// Read ==> findAll || findOne / SELECT
// Update ==> update / UPDATE
// Delete ==> destory / DELETE

// router.get("/", (req, res, next) => {
//   res.cookie("middle", "testing", { expires: Date.now() + 1000 * 1 });
//   next();
// });

// 요기 위가 미들웨어 이다

router.get("/", async (req, res) => {
  const { body, query } = req;
  const options = {
    include: [
      {
        model: Table2,
        as: "Table2s",
      },
    ],
  };
  if (query.column2) {
    options.where = {
      // 어떤 조건으로 찾을거인가 ?
      column2: query.column2, // column2가 query.column2인 애를 찾겠다
    };
  }
  const tempTables = await Table1.findAll(options);
  //  const tempTables = await Table1.findAll({
  //    where = { column2 : query.column2}
  // });
  res.send({ name: "get", body, query, tempTables });
});

router.post("/", async (req, res) => {
  const { body, query } = req;
  const tempTable = await Table1.create({
    column1: body.column1,
  });
  res.send({ name: "post", body, query, tempTable });
});

router.put("/", async (req, res) => {
  // 수정 시 전부 수정을 요청할 때
  const { body, query } = req;
  const tempTabel = await Table1.update(
    {
      column1: body.column1, // 수정할 정보를 입력한다
    },
    {
      where: {
        column2: body.column2, // 조건
      },
    }
  );
  res.send({ name: "put", body, query, tempTabel });
});

router.patch("/", (req, res) => {
  // 일부분 수정을 요청할 때
  const { body, query } = req;
  res.send({ name: "patch", body, query });
});
router.delete("/", async (req, res) => {
  const { body, query } = req;
  const tempTable = await Table1.destroy({
    where: {
      column1: query.column1,
    },
  });
  res.send({ name: "delete", body, query, tempTable });
});

// router
//   .route("/")
//   .get((req, res) => {
//     res.end();
//   })
//   .post((req, res) => {
//     res.end();
//   })
//   .put((req, res) => {
//     res.end();
//   })
//   .patch((req, res) => {
//     res.end();
//   })
//   .delete((req, res) => {
//     res.end();
//   });

// REST API 방식(get, post, put, patch, delete)
module.exports = router;
