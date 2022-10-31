const jwt = require("jsonwebtoken");
const router = require("express").Router();

const user = require("./user.js");
const board = require("./board.js");
const comment = require("./comment.js");

router.use("/user", user);
router.use("/board", board);
router.use("/comment", comment);

module.exports = router;
