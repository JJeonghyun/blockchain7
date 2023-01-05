import styled from "styled-components";

const MainComp = () => {
  return (
    <MainBox>
      <div>
        <img
          src="https://www.uber-assets.com/image/upload/v1555699210/assets/63/cdb12d-a0cd-49fa-a6c0-6184a84d99ea/original/About_us_600.jpg"
          alt=""
        />
      </div>
      <div>
        <div>Uber는 이동및 운송의 혁신을 추구한다</div>
      </div>
    </MainBox>
  );
};

export default MainComp;

const MainBox = styled.div`
  width: 100%;
  & > div {
    height: 50vh;
    & > img {
      width: 100%;
      object-position: center center;
      height: 100%;
    }
  }
`;
