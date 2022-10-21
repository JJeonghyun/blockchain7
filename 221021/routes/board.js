const router = require("express").Router();
// /api/board

router.get("/", (req, res) => {
  // 응답을 보내는 메서드 : 목록과 페이징, 지금 몇번째 페이지이고 총 몇 페이지 인지
  // axios.get("/api/borad")
  console.log(req.route);
  res.send(req.route + "get으로 받았다!");
});
router.post("/add", (req, res) => {
  // 추가하는 메서드
  // 게시판에 글을 추가 하기 위해
  // axios.post("/api/borad/add")
  console.log(req.route);
  res.send(req.route + "post로 받았다!");
});
module.exports = router;
