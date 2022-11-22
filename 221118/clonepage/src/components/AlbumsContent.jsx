import React from "react";
import styled from "styled-components";
import AlbumContentImg from "./AlbumContentImg";

function AlbumsContent({ albumAmount, imgName }) {
  function insertAlbum() {
    let line = parseInt(albumAmount / 6);
    let remain = parseInt(albumAmount % 6);

    let tempArr = [];
    for (let i = 1; i < line + 1; i++) {
      tempArr.push(
        <AlbumContentImg
          key={i}
          line={i}
          imgName={imgName}
          albumAmount={albumAmount}
        />
      );
    }
    if (remain) {
      for (let i = line + 1; i < line + 2; i++) {
        tempArr.push(
          <AlbumContentImg
            key={i}
            line={i}
            imgName={imgName}
            albumAmount={albumAmount}
          />
        );
      }
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
    justify-content: flex-start;
    align-items: center;
    & > div {
      width: 13.2%;
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
