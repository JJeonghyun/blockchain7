import "./App.css";
import store from "./store";
import { useState } from "react";
import styled from "styled-components";
import { COUNT1, actions as count1Actions } from "./action/count1";

function App() {
  const [num, setNum] = useState(0);
  const [temp, setTemp] = useState(0);
  const [editNum, setEditNum] = useState(0);
  const [deleteNum, setDeleteNum] = useState(0);
  const [_, setRender] = useState(false);
  // _(under-bar) 란 ? 보통 사용하지 않을 변수의 이름으로 설정한다
  // _ 라는 라이브러리도 있다. < 주의사항

  return (
    <CompDiv>
      <div>{store.getState().count1}</div>
      {/* store.getState()는 store를 가져온다. */}
      {/* 
      store.getState()로 받아온 store의 객체는 React의 랜더링에 관여하지 않는다
      그래서 Class 컴포넌트에서는 forceupdate()를 사용해서 강제로 랜더링을 해준다.
      Function 컴포넌트에서는 state를 하나 만들어서 setState를 통해 랜더링을 강제한다
       */}
      <input
        type={"number"}
        value={num}
        onInput={(e) => {
          setNum(+e.target.value);
        }}
      />

      <CompBtn
        onClick={() => {
          store.dispatch(count1Actions.plus(num));
        }}
      >
        +
      </CompBtn>
      <CompBtn
        onClick={() => {
          store.dispatch(count1Actions.minus(num));
        }}
      >
        -
      </CompBtn>
      <CompDiv>
        <input
          type={"number"}
          value={editNum}
          onInput={(e) => {
            setEditNum(+e.target.value);
            setDeleteNum(+e.target.value);
          }}
        />
      </CompDiv>
      <CompBtn
        onClick={() => {
          store.dispatch({ type: "count2/plus", payload: {} });
        }}
      >
        count2++
      </CompBtn>
      <CompBtn
        onClick={() => {
          store.dispatch({ type: "count2/minus", payload: {} });
        }}
      >
        count2--
      </CompBtn>
      <CompBtn
        onClick={() => {
          setTemp(temp + 1); // 억지로 리랜더링을 하기 위해 임시변수 변동
          // setRender(state=> !state);
          store.dispatch({ type: "arr/push", payload: { input: num } });
        }}
      >
        PUSH
      </CompBtn>
      <CompBtn
        onClick={() => {
          setTemp(temp - 1);
          store.dispatch({ type: "arr/pop", payload: { input: num } });
        }}
      >
        POP
      </CompBtn>
      <CompBtn
        onClick={() => {
          setTemp(temp - 1);
          store.dispatch({
            type: "arr/edit",
            payload: { input: num, edit: editNum },
          });
        }}
      >
        EDIT
      </CompBtn>
      <CompBtn
        onClick={() => {
          setTemp(temp + 1);
          store.dispatch({
            type: "arr/delete",
            payload: { input: num, delete: deleteNum },
          });
        }}
      >
        DELETE
      </CompBtn>
      <div>
        {store.getState().arr.map((item, index) => (
          <div key={index}>
            No.{index + 1} : {item}
          </div>
        ))}
      </div>
    </CompDiv>
  );
}

export default App;

const CompDiv = styled.div`
  padding: 0px;
  margin-top: 5px;

  &:last-child {
    padding: 10px;
    margin-top: 0px;
  }
  & > input {
    height: 25px;
    margin-right: 5px;
  }
`;

const CompBtn = styled.button`
  padding: 5px 10px;
  margin: 5px 5px 0 0;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;
