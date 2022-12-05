import "./App.css";

import { useSelector, useDispatch } from "react-redux";

import { action } from "./modules/count";
import promiseTime from "./modules/promiseTime";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(action.increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(action.decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          promiseTime(action.increment(), 1000).then((data) => {
            // then 메서드를 이용하여 매개변수로 콜백함수로 전달
            // 전달된 콜백함수는 매개변수로 Promise의 resolve 결과를 받는다
            // promiseTime.js의 6번째 줄 에서 전달하는 type 매개변수를 여기서 data 매개변수로 받는다
            dispatch(data);
            // const temp = dispatch(await promiseTime(action.decrement(),1000)) < 와 같이 작성하면 오류 발생
            // dispatch에 전달하는 매개변수는 기본적으로는 객체 형식의 action만 가능
            // action에서 비동기 처리를 할 수 있도록 중간 과정을 추가하는 것이 redux-thunk
            // 중간 과정으로 Promise, axios 등을 처리할 수 있도록 async, await를 사용할 수 있게 추가한다
          });
          // setTimeout(() => {
          //   dispatch(action.increment());
          // }, 1000);
        }}
      >
        Promise +
      </button>
      <button
        onClick={async () => {
          // setTimeout(() => {
          //   dispatch(action.decrement());
          // }, 1000);
          const temp = await promiseTime(action.decrement(), 1000);
          // 1초간 기다린 후에 액션을 받아서
          dispatch(temp);
          // dispatch에 액션(temp)을 전달한다
        }}
      >
        Promise -
      </button>
      <button
        onClick={() => {
          // 1. 사용자가 클릭, dispatch 호출하고 안에 메서드를 호출
          // 1-1. 해당 메서드는 함수를 반환
          dispatch(action.asyncIncrement());
        }}
      >
        thunk +
      </button>
      <button
        onClick={() => {
          dispatch(action.asyncDecrement());
        }}
      >
        thunk -
      </button>
    </div>
  );
}

export default App;

// redux-thunk는 무슨 역할을 하는가..
// - 비동기 처리를 사용하기 위해서 미들웨어로 쓰인다
