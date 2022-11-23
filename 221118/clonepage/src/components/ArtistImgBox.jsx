import React, { useState } from "react";
import styled from "styled-components";

function ArtistImgBox() {
  const [imgElem, setImgElem] = useState([2, 3, 4, 5]);

  return (
    <ImgFlex>
      {imgElem.map((item, index) => (
        <div key={index}>
          <img key={index} src={`imgs/ArtistImg${item}.jpg`} alt="" />
        </div>
      ))}
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
