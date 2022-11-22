import React from "react";
import styled from "styled-components";
import ArtistImgBox from "./ArtistImgBox";
import LogoBox from "./LogoBox";
import AlbumsTitle from "./AlbumsTitle";
import AlbumsContent from "./AlbumsContent";

function ArtistComp() {
  return (
    <>
      <TopTitle>
        <div>MONDAYKIZ</div>
      </TopTitle>
      <BodySecond>
        <ArtistFlex>
          <div>
            <img
              src="https://lh3.googleusercontent.com/vRiG6Yy8KxeRU2m3nwFaOLOF4LbsdpXLaj8nYGENz7xGA6n4Yc6KBL5KIoqAHBLAd-F2sKbRQGsHGsJ21gkv6YvXD5D7LZGYrI_JRdDP8VdU4aiMcc7WaA=w800"
              alt=""
            />
          </div>
          <TextBox>
            <TextTitle>
              <div>이진성</div>
              <div>Lee jin sung</div>
              <div>1985.02.27</div>
            </TextTitle>
            <TextContent>
              <div>2005년 12월 18일, 'bye bye bye'로 데뷔.</div>
              <div>현재까지 다양한 음반을 발매하고</div>
              <div>꾸준한 활동을 이어 오고 있는 대한민국의 발라드 가수</div>
            </TextContent>
            <TextContent>
              <div>수 많은 대표곡을 보유한 보컬리스트로서</div>
              <div>먼데이키즈의 이진성은 지금도 현재진행형이다.</div>
            </TextContent>
          </TextBox>
        </ArtistFlex>
      </BodySecond>
      <ArtistImgBox />
      <LogoBox />
      <AlbumsTitle category={"먼데이 키즈"} engCategory={"Monday kiz"} />
      <AlbumsContent albumAmount={41} imgName={"album"} />
      <AlbumsTitle category={"콜라보레이션"} engCategory={"Collaboration"} />
      <AlbumsContent albumAmount={19} imgName={"collaboration"} />
      <AlbumsTitle category={"피처링"} engCategory={"Featuring"} />
      <AlbumsContent albumAmount={6} imgName={"feat"} />
      <AlbumsTitle category={"O.S.T"} engCategory={"O.S.T"} />
      <AlbumsContent albumAmount={32} imgName={"ost"} />
    </>
  );
}

const TopTitle = styled.div`
  width: 65%;
  margin: 0 auto;
  & > div {
    display: flex;
    justify-content: center;
    align-item: center;
    font-size: 2rem;
    padding: 30px 0;
  }
`;

const BodySecond = styled.div`
  width: 100%;
  padding-top: 15px;
`;
const ArtistFlex = styled.div`
  display: flex;
  width: 75%;
  margin: 0 auto;

  justify-content: center;
  align-items: center;
  & > div {
    width: 45%;
    padding: 0 1%;
    & > img {
      width: 100%;
    }
  }
`;

const TextBox = styled.div`
  & > div {
    padding: 15px;
  }
`;

const TextTitle = styled.div`
  font-size: 1.7rem;
  color: rgb(40, 50, 78);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 500;
  & > div {
    padding: 5px;
  }
  & > div:nth-child(2) {
    font-size: 1.5rem;
  }
  & > div:last-child {
    font-size: 1rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.9rem;
  letter-spacing: 1.5 px;
`;
export default ArtistComp;
