const Cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { User, Board, Comment } = require("../models/index.js");

router.post("/add", (req, res) => {
  // const tempBoard = await Comment.create(req.body);
  console.log(req.body);
});

module.exports = router;
