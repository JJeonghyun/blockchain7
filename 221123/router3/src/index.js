import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Log from "./components/Log";
import In from "./components/Log/In";
import Out from "./components/Log/Out";

const router = createBrowserRouter([
  {
    // 이 안에서 라우터에 대한 설정을 모두 구현한다.
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "log",
        element: <Log />,
        children: [
          {
            path: "in",
            element: <In />,
          },
          {
            path: "out",
            element: <Out />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const temp = {
//   path: "", // root 주소
//   element: <App />, // 해당 컴포넌트
//   children: [
//     // App 컴포넌트 하위 컴포넌트들
//     {
//       path: "", // root 주소
//       element: <Home />, // 해당 컴포넌트
//     },
//     {
//       path: "login", // login 주소
//       element: <LogIn />, // 해당 컴포넌트
//     },
//     {
//       path: "board", // board 주소
//       element: <Board />, // 해당 컴포넌트
//     },
//     {
//       path: "log", // log 주소
//       element: <Log />, // 해당 컴포넌트
//       children: [
//         // Log 컴포넌트 하위 경로 컴포넌트
//         {
//           path: "in", // /log/in 주소
//           element: <In />, // Log 컴포넌트 하위 In 컴포넌트
//         },
//         {
//           path: "out", // /log/out 주소
//           element: <Out />, // Log 컴포넌트 하위 Out 컴포넌트
//         },
//       ],
//     },
//   ],
// };
