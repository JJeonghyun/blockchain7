import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// 위 import와 아래 import의 차이 : 설치된 라이브러리, 아래는 개발자가 작성한 코드

import store from "./store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
