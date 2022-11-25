import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <App />
);

// StrictMode가 무엇이냐 ?
// - 안전하지 않은 생명주기 메서드를 체크해서 알려준다. (componentDidMount, componentDidUpdate 등등)
// - componentWillMount < 라는 놈이 있었다. 이런 것들을 확인해준다. (안전하지 않은 생명주기, 현재는 없어짐)

// - ref에 대한 경고를 해준다.
// - 메모리 누수 등의 부작용 검사를 해준다
//  - 메모리가 삭제되지 않는 현상(메모리 누수) 등의 문제가 발생했을 때 알려준다.
// - 레거시 Context API에 대한 검사를 해준다.
//  - Context API만 남았으며 레거시 Context API가 없다. < 과거의 잔재

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
