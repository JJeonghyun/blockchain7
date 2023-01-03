import styled from "styled-components";
import { useState } from "react";

const ImgBoxComponent = () => {
  const [imgElem, setImgElem] = useState([2, 3, 4, 5]);

  return (
    <ImgFlex>
      {imgElem.map((item, index) => (
        <div key={`img-inner-box${index}`}>
          <img
            key={`img-box${index}`}
            src={`imgs/ArtistImg${item}.jpg`}
            alt=""
          />
        </div>
      ))}
    </ImgFlex>
  );
};

export default ImgBoxComponent;

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
