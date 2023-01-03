import styled from "styled-components";

import HeaderContainer from "../components/Header/Container";
import VideoContainer from "../components/Video/Container";

function Video() {
  return (
    <MainBox>
      <div>
        <div>
          <HeaderContainer />
        </div>
      </div>
      <div>
        <div>
          <VideoContainer />
        </div>
      </div>
    </MainBox>
  );
}

const MainBox = styled.div`
  width: 100%;
  & > div:first-child {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 3;
    & > div {
      width: 60%;
      margin: 0 auto;
      padding: 30px 0;
    }
  }
  & > div:last-child {
    padding-top: 95px;
    & > div {
      width: 100%;
    }
  }
`;

export default Video;
