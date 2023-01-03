import styled from "styled-components";

const IconComponent = () => {
  return (
    <>
      <IconBox>
        <img
          src="https://storage.googleapis.com/cr-resource/image/12e6e805fc21bcd01a99138d8477c577/mondaykiz/e4bdad247bb95043a811a69455789dcc.png"
          alt=""
        />
      </IconBox>
      <IconText>MONDAY KIZ COMPANY</IconText>
    </>
  );
};
export default IconComponent;

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
