import { createStore } from "redux";
// createStore는 store 만드는 함수. Deprecated 됐다
// deprecated : 중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될 (컴퓨터 시스템 기능 등)
// createStore를 대신하는 함수가 @reduxjs/toolkit 의 configureStore 메서드 이다
// 기존의 코드들이 너무 많아서 사용자가 많다
import { composeWithDevTools } from "redux-devtools-extension";
// 브라우저의 Redux Devtool과 연결해준다. 함수이다
import { reducer } from "./reduer.js";

export const store = createStore(
  // store를 생성한다
  reducer, // 첫번째 매개변수로 reducer를 전달한다
  { test: "testing" }, // 두번째 매개변수로 초기 상태를 전달한다, initialize() / initializeState
  composeWithDevTools() // 옵션으로 devtool에 연결한다
);
