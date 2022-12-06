import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import "./App.css";
import { action, counterThunk } from "./modules/counter";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.value);
  const isLoading = useSelector((state) => state.count.isLoading);
  const [inputCount, setCount] = useState(0);
  const [input, setInput] = useState(0);
  return (
    <div>
      <div>{count}</div>
      {!isLoading || <div>Now Loading</div>}
      <div>
        <input
          type={"number"}
          value={input}
          onInput={(e) => {
            setInput(e.target.value);
          }}
          placeholder={"input Count"}
        />
      </div>
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
          dispatch(action.input(input));
          // input 메서드에 전달되는 매개변수는 payload
        }}
      ></button>
      <div>
        <input
          type={"number"}
          value={inputCount}
          onInput={(e) => {
            setCount(e.target.value);
          }}
          placeholder={"count"}
        />
        <button
          onClick={() => {
            dispatch(counterThunk(inputCount));
            // counter에서 createAsyncThunk로 정의한 변수는 action 함수처럼 사용 가능
          }}
        >
          inputCount
        </button>
      </div>
    </div>
  );
}

export default App;
