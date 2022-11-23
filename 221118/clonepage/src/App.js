import "./App.css";
import Main from "./pages/Main";
import Artist from "./pages/Artist";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Video from "./pages/Video";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";

// import Artist from "./components/Artist";
// BrowerRouter - URL, UI를 동기화 하는 라우터
// Route - 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당 컴포넌트 함수 렌더링
// Link - a태그와 비슷, to속성에 설정된 링크로 이동

function App() {
  return (
    <AppElem>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/artist" element={<Artist />}></Route>
        <Route path="/video" element={<Video />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/everglow" element={<Everglow />}></Route> */}
      </Routes>
    </AppElem>
  );
}

const AppElem = styled.div`
  width: 100%;
`;

export default App;
