import { Router } from "express";

const router = Router();
const todoList = [];

router
  .route("/")
  .get((req, res) => {
    res.send({
      list: todoList,
    });
  })
  .post((req, res) => {
    todoList.push({ text: req.body["name"], time: req.body.time });
    res.end();
  })
  .put((req, res) => {})
  .delete((req, res) => {
    todoList.splice(req.query.id, 1);
  });

export default router;
