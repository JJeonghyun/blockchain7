import styled from "styled-components";
import { TodoBtn } from "../setting";
import { Link, Routes, Route } from "react-router-dom";
import List from "./List/index";
import TodoModal from "./TodoModal";
import { useState } from "react";

// export 시 default를 쓰지 않으면 {}를 사용해 구조분해할당 형식으로 가져와야한다.

export default function Todo() {
  const [list, setList] = useState([
    {
      taskName: "today",
      status: 0,
    },
    {
      taskName: "lunch",
      status: 1,
    },
    {
      taskName: "what",
      status: 2,
    },
  ]);
  return (
    <div>
      <h1>Todo List</h1>
      <AddBtnBox>
        <Link to={"add"}>
          <TodoBtn className="sky">Add Task</TodoBtn>
        </Link>
      </AddBtnBox>
      <List list={list} setList={setList} />
      <Routes>
        <Route
          path={"add"}
          element={<TodoModal setList={setList} func={"Add"} />}
        ></Route>
        <Route
          path={"edit"}
          element={<TodoModal setList={setList} func={"Edit"} />}
        ></Route>
      </Routes>
    </div>
  );
}
const AddBtnBox = styled.div`
  text-align: right;
`;
