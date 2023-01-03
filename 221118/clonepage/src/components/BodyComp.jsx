import React from "react";
import styled from "styled-components";
import EventComp from "./EventComp";
import FooterContainer from "./Footer/Container";

class BodyComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="body-main">
        <BodyVideo>
          <iframe
            width="1140"
            height="641"
            src="https://www.youtube.com/embed/kEpnSlMKH8Y"
            title="먼데이 키즈 - 집에 돌아가는 길 외롭다 Official Teaser MV_Monday KIz - Lonely way back home"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </BodyVideo>
        <BodySecond>
          <div>
            <div>MONDAYKIZ COMPANY</div>
            <div>
              먼데이키즈 컴퍼니는 여러분들과 먼데이키즈 컴퍼니 소속 아티스트의
              음악적 계획과 방향을 공유하고
            </div>
            <div>다양한 방법으로 소통하기 위해 설립된 음악 레이블</div>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/cr-resource/image/12e6e805fc21bcd01a99138d8477c577/mondaykiz/1920/0acc5c4336a6220bb8c367fc83177f89.jpg"
              alt=""
            />
          </div>
        </BodySecond>
        <IconBox>
          <img
            src="https://storage.googleapis.com/cr-resource/image/12e6e805fc21bcd01a99138d8477c577/mondaykiz/e4bdad247bb95043a811a69455789dcc.png"
            alt=""
          />
        </IconBox>
        <IconText>MONDAY KIZ COMPANY</IconText>
        <EventContainer>
          <EventComp startNum={1} endNum={6} />
          <EventComp startNum={7} endNum={12} />
        </EventContainer>
        <FooterContainer />
      </div>
    );
  }
}

const BodyVideo = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const BodySecond = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  & > div {
    width: 49%;
    & > img {
      width: 100%;
    }
  }
  & > div:first-child {
    padding: 70px;
    text-align: center;
  }
  & > div:first-child > div:first-child {
    font-size: 3rem;
    color: #333333;
  }
  & > div:first-child > div:nth-child(2),
  & > div:first-child > div:nth-child(3) {
    color: #797979;
    width: 47%;
    margin: 0 auto;
    padding: 15px 0;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const IconBox = styled.div`
  width: 60px;
  margin: 0 auto;
  padding: 15px 0;
  & > img {
    width: 100%;
  }
`;

const IconText = styled.div`
  width: fit-content;
  margin: 0 auto;
  font-size: 2rem;
  color: #333333;
  letter-spacing: 10px;
`;

const EventContainer = styled.div`
  width: 65%;
  margin: 0 auto;
`;

export default BodyComp;
