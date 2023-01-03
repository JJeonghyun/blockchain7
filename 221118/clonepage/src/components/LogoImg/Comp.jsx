import styled from "styled-components";
import { useState } from "react";

const LogoComponent = () => {
  const [logoImg, setLogo] = useState([
    "https://storage.googleapis.com/i.addblock.net/template/sns_p_01.png",
    "https://storage.googleapis.com/i.addblock.net/template/sns_p_04.png",
    "https://storage.googleapis.com/cr-resource/image/12e6e805fc21bcd01a99138d8477c577/mondaykiz/60/678b85dc891b026d044ae00817160f39.png",
    "https://storage.googleapis.com/i.addblock.net/template/sns_p_02.png",
    "https://storage.googleapis.com/cr-resource/image/12e6e805fc21bcd01a99138d8477c577/mondaykiz/60/dd9e0c1591963ba13b38fd12eaf79f5a.png",
  ]);
  return (
    <LogoFlex>
      <div>
        <img src={logoImg[0]} alt="" />
      </div>
      <div>
        <img src={logoImg[1]} alt="" />
      </div>
      <div>
        <img src={logoImg[2]} alt="" />
      </div>
      <div>
        <img src={logoImg[3]} alt="" />
      </div>
      <div>
        <img src={logoImg[4]} alt="" />
      </div>
    </LogoFlex>
  );
};
export default LogoComponent;

const LogoFlex = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  & > div {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      width: 30px;
    }
  }
`;
