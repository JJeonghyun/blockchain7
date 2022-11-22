import React from "react";
import ReactDOM from "react-dom/client";
// React와 외부를 연결하는 라이브러리
import "./index.css";
import App from "./App"; // 컴포넌트를 가져온다
import reportWebVitals from "./reportWebVitals"; // 성능측정용 파일? 정도로 알면 될듯하다

const root = ReactDOM.createRoot(document.getElementById("root"));
// document.getElementById => Id를 기준으로 엘리먼트를 가져온다
// React의 Root DOM을 만든다. < Virtual DOM의 시작점이 필요해서
// 개인적으로는 React의 장점은 코드의 재활용이 쉽다

root.render(
  // React의 Root DOM에 매개변수로 전달된 컴포넌트를 생성한다 (Mount)
  // <React.StrictMode>
  // React쪽에서 정확하게 출력하기 위해서 생성할 때 한번 삭제 후에 다시 생성한다.
  // mount > unmount > mount 과정
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Redux => useContext, useReducer, StrictMode
