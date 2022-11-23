const temp = {
  path: "", // root 주소
  element: <App />, // 해당 컴포넌트
  children: [
    // App 컴포넌트 하위 컴포넌트들
    {
      path: "", // root 주소
      element: <Home />, // 해당 컴포넌트
    },
    {
      path: "login", // login 주소
      element: <LogIn />, // 해당 컴포넌트
    },
    {
      path: "board", // board 주소
      element: <Board />, // 해당 컴포넌트
    },
    {
      path: "log", // log 주소
      element: <Log />, // 해당 컴포넌트
      children: [
        // Log 컴포넌트 하위 경로 컴포넌트
        {
          path: "in", // /log/in 주소
          element: <In />, // Log 컴포넌트 하위 In 컴포넌트
        },
        {
          path: "out", // /log/out 주소
          element: <Out />, // Log 컴포넌트 하위 Out 컴포넌트
        },
      ],
    },
  ],
};
