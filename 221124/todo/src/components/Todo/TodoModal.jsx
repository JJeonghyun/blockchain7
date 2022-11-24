import styled from "styled-components";
import { TodoBtn } from "../setting";
import { Link, useLocation } from "react-router-dom";

import { STATESLIST, STATUS } from "../setting";
import { useState } from "react";

function TodoModal({ setList, func }) {
  const index = useLocation().state?.index;
  const item = useLocation().state?.item;
  const [taskName, setTaskName] = useState(item ? item.taskName : "");
  const [status, setStatus] = useState(item ? item.status : STATUS.Todo);

  return (
    <TodoModalBox>
      <TodoModalInnerBox>
        <div>
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onInput={(e) => {
              setTaskName(e.target.value);
            }}
          />
        </div>
        <div>
          {STATESLIST.map((item, index) => (
            <TodoBtn
              key={`TodoBtn-${index}`}
              className={
                STATESLIST[index].toLowerCase().replace(" ", "-") +
                (status === index ? " on" : "")
              }
              onClick={() => {
                setStatus(index);
              }}
            >
              {item}
            </TodoBtn>
          ))}
        </div>
        <div>
          <Link to={"/"}>
            <TodoBtn
              onClick={() => {
                if (func === "Add")
                  setList((state) => [...state, { taskName, status }]);
                else if (func === "Edit")
                  setList((list) => {
                    const before = list.slice(0, index);
                    const after = list.slice(index + 1);
                    return [...before, { taskName, status }, ...after];
                  });
              }}
            >
              {func}
            </TodoBtn>
          </Link>
          <Link to={"/"}>
            <TodoBtn>Cancel</TodoBtn>
          </Link>
        </div>
      </TodoModalInnerBox>
    </TodoModalBox>
  );
}
export default TodoModal;

const TodoModalBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoModalInnerBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  input {
    width: 100%;
    padding: 5px 10px;
  }
  & > div {
    margin: 10px 0;
    display: flex;
    justify-content: space-evenly;
    &:last-child {
      justify-content: space-between;
    }
  }
`;
