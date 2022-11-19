import "./App.css";
import Header from "./components/Header";
import BodyComp from "./components/BodyComp";
import styled from "styled-components";
// import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
// import Artist from "./components/Artist";
// BrowerRouter - URL, UI를 동기화 하는 라우터
// Route - 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당 컴포넌트 함수 렌더링
// Link - a태그와 비슷, to속성에 설정된 링크로 이동
// Switch - 자식 컴포넌트 Route 또는 Redirect 중 매치되는 첫 번째 요소를 렌더링
//        - 매칭되는 요소만 렌더링 하는 장점

function App() {
  return (
    <AppElem>
      <HeaderContainer>
        <HeaderInnerContainer>
          <Header />
        </HeaderInnerContainer>
      </HeaderContainer>
      {(function () {
        if ("/" == "/")
          return (
            <BodyContainer>
              <BodyInnerContainer>
                <BodyComp />
              </BodyInnerContainer>
            </BodyContainer>
          );
        else {
          return <div>tq</div>;
        }
      })()}
    </AppElem>
  );
}

const AppElem = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 3;
`;

const HeaderInnerContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 30px 0;
`;

const BodyContainer = styled.div`
  padding-top: 95px;
`;

const BodyInnerContainer = styled.div`
  width: 100%;
`;
export default App;

// {(function () {
//   if ("/" == "/")
//     return (
//       <BodyContainer>
//         <BodyInnerContainer>
//           <BodyComp />
//         </BodyInnerContainer>
//       </BodyContainer>
//     );
//   else {
//     return <div>tq</div>;
//   }
// })()}
