import React from "react";
import styled from "styled-components";

function LogoBox() {
  return (
    <LogoFlex>
      <div>
        <img
          src="https://storage.googleapis.com/i.addblock.net/template/sns_p_01.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://storage.googleapis.com/i.addblock.net/template/sns_p_04.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://storage.googleapis.com/cr-resource/image/12e6e805fc21bcd01a99138d8477c577/mondaykiz/60/678b85dc891b026d044ae00817160f39.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://storage.googleapis.com/i.addblock.net/template/sns_p_02.png"
          alt=""
        />
      </div>

      <div>
        <img
          src="https://storage.googleapis.com/cr-resource/image/12e6e805fc21bcd01a99138d8477c577/mondaykiz/60/dd9e0c1591963ba13b38fd12eaf79f5a.png"
          alt=""
        />
      </div>
    </LogoFlex>
  );
}

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

export default LogoBox;
