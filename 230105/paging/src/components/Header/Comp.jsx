import styled from "styled-components";

const HeaderComp = () => {
  return (
    <HeaderBox>
      <div>
        <div>
          <div>Uber</div>
          <div className="dropdown">기업정보</div>
          <div>안전</div>
          <div>고객지원</div>
        </div>
        <div>
          <div>언어</div>
          <div>재품 메뉴</div>
          <div>로그인</div>
          <div>가입하기</div>
        </div>
      </div>
    </HeaderBox>
  );
};

export default HeaderComp;

const HeaderBox = styled.div`
  background-color: rgba(0, 0, 0, 1);
  color: white;
  width: 100%;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      & > div {
        padding: 5px 20px;
        font-size: 1.2rem;
        border-radius: 20px;
        position: relative;

        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
        }
      }
    }
  }
  .dropdown::after {
    content: "▼";
    background-color: rgba(0, 0, 0, 0);
    color: white;
    position: absolute;
    right: 0;
  }
`;
