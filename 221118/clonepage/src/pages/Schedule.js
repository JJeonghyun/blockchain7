import "../App.css";
import HeaderContainer from "../components/Header/Container";

import styled from "styled-components";
import FooterContainer from "../components/Footer/Container";

function Schedule() {
  return (
    <MainBox>
      <div>
        <div>
          <HeaderContainer />
        </div>
      </div>
      <BodyContainer>
        <BodyInnerContainer>
          <div>
            <div>
              <div>MONDAYKIZ COMPANY</div>
            </div>
            <div>
              <div>아티스트 스케줄 보기</div>
            </div>
          </div>
          <div>
            <div>
              <img src="imgs/MainImg.jpg"></img>
            </div>
            <div>
              <img src="imgs/gaeulImg3.jpeg"></img>
            </div>
            <div></div>
          </div>
          <FooterContainer />
        </BodyInnerContainer>
      </BodyContainer>
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
`;

const BodyContainer = styled.div`
  padding-top: 95px;
`;

const BodyInnerContainer = styled.div`
  width: 100%;
  & > div:first-child {
    background-color: #434c52;
    color: white;
    padding: 20px 0;
    & > div {
      width: fit-content;
      margin: 0 auto;
      padding: 10px 0;
    }
    & > div:first-child > div {
      border: 5px solid white;
      padding: 5px;
      font-size: 1.8rem;
    }
    & > div:last-child > div {
      padding: 5px;
      font-size: 1.3rem;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    padding: 30px;
    & > div {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Schedule;
