import React from "react";
import styled from "styled-components";
import AlbumContentImg from "./AlbumContentImg";

function AlbumsContent() {
  return (
    <AlbumsContainer>
      <AlbumContentImg />
    </AlbumsContainer>
  );
}

const AlbumsContainer = styled.div`
  width: 100%;
  background-color: #ececec;
  & > div {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      width: 14.2%;
      background-color: white;
      margin: 15px;
      text-align: center;
      & > div {
        width: 100%;
        & > img {
          width: 100%;
        }
      }
    }
  }
`;
export default AlbumsContent;
