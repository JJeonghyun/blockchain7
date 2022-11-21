import React from "react";
import styled from "styled-components";
import AlbumContentImg from "./AlbumContentImg";

function AlbumsContent({ lineNum, imgName }) {
  function insertAlbum() {
    let tempArr = [];
    for (let i = 1; i < lineNum + 1; i++) {
      tempArr.push(<AlbumContentImg lineNum={i} imgName={imgName} />);
    }
    return tempArr;
  }
  return <AlbumsContainer>{insertAlbum()}</AlbumsContainer>;
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
        font-size: 0.7rem;
        color: #454545;
        padding: 1px 0;
        & > img {
          width: 100%;
        }
      }
    }
  }
`;
export default AlbumsContent;
