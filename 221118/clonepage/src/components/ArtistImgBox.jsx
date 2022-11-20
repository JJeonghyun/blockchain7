import React from "react";
import styled from "styled-components";

function ArtistImgBox() {
  return (
    <ImgFlex>
      <div>
        <img
          src="https://storage.googleapis.com/cr-resource/image/12e6e805fc21bcd01a99138d8477c577/mondaykiz/670/73613b28a2581eac452dbb948548a167.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://storage.googleapis.com/cr-resource/image/12e6e805fc21bcd01a99138d8477c577/mondaykiz/670/27b809eaf584531fc445d14ff179093a.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://storage.googleapis.com/cr-resource/image/12e6e805fc21bcd01a99138d8477c577/mondaykiz/670/e91faf99b1cbc935f6ea8286ed844f25.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://storage.googleapis.com/cr-resource/image/12e6e805fc21bcd01a99138d8477c577/mondaykiz/670/27e3e516ba88fa13e146681ac850ede7.jpg"
          alt=""
        />
      </div>
    </ImgFlex>
  );
}

const ImgFlex = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  & > div {
    width: 25%;
    & > img {
      width: 100%;
    }
  }
`;

export default ArtistImgBox;
