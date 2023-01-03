import styled from "styled-components";

const InfoComponent = () => {
  return (
    <InfoBox>
      <div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/vRiG6Yy8KxeRU2m3nwFaOLOF4LbsdpXLaj8nYGENz7xGA6n4Yc6KBL5KIoqAHBLAd-F2sKbRQGsHGsJ21gkv6YvXD5D7LZGYrI_JRdDP8VdU4aiMcc7WaA=w800"
            alt=""
          />
        </div>
        <div>
          <div>
            <div>이진성</div>
            <div>Lee jin sung</div>
            <div>1985.02.27</div>
          </div>
          <div>
            <div>2005년 12월 18일, 'bye bye bye'로 데뷔.</div>
            <div>현재까지 다양한 음반을 발매하고</div>
            <div>꾸준한 활동을 이어 오고 있는 대한민국의 발라드 가수</div>
          </div>
          <div>
            <div>수 많은 대표곡을 보유한 보컬리스트로서</div>
            <div>먼데이키즈의 이진성은 지금도 현재진행형이다.</div>
          </div>
        </div>
      </div>
    </InfoBox>
  );
};

export default InfoComponent;

const InfoBox = styled.div`
  width: 100%;
  padding-top: 15px;
  & > div {
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
    &:last-child > div {
      &:first-child {
      }
      & > div {
        padding: 15px;
        &:first-child {
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
        }
        &:nth-child(2),
        &:nth-child(3) {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 0.9rem;
          letter-spacing: 1.5 px;
        }
      }
    }
  }
`;
