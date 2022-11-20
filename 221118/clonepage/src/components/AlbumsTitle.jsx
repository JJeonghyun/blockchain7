import React from "react";
import styled from "styled-components";

function AlbumsTitle() {
  return (
    <TitleText>
      <div>먼데이 키즈 앨범 (Monday kiz Albums)</div>
    </TitleText>
  );
}

const TitleText = styled.div`
  width: 100%;
  & > div {
    width: 70%;
    margin: 30px auto;
    border-bottom: 5px double black;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 10px 0;
  }
`;
export default AlbumsTitle;
