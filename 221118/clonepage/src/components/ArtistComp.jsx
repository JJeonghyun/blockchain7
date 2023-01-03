import { useState } from "react";

import TitleContainer from "./ArtistTitle/Container";
import InfoContainer from "./ArtistInfo/Container";
import ImgBoxContainer from "./ArtistImg/Container";
import LogoContainer from "./LogoImg/Container";
import AlbumTitleContainer from "./AlbumTitle/Container";
import AlbumContentContainer from "./AlbumContent/Container";
import FooterContainer from "./Footer/Container";

function ArtistComp() {
  const [albums, setAlbums] = useState([
    {
      category: "먼데이키즈",
      engCategory: "Monday kiz",
      albumAmount: 41,
      imgName: "album",
    },
    {
      category: "콜라보레이션",
      engCategory: "Collaboration",
      albumAmount: 19,
      imgName: "collaboration",
    },
    {
      category: "피처링",
      engCategory: "Featuring",
      albumAmount: 6,
      imgName: "feat",
    },
    {
      category: "O.S.T",
      engCategory: "O.S.T",
      albumAmount: 32,
      imgName: "ost",
    },
  ]);
  return (
    <>
      <TitleContainer />
      <InfoContainer />
      <ImgBoxContainer />
      <LogoContainer />
      {albums.map((item, index) => (
        <>
          <AlbumTitleContainer
            key={`album-title-container-${index}`}
            category={item.category}
            engCategory={item.engCategory}
          />
          <AlbumContentContainer
            key={`album-content-container-${index}`}
            albumAmount={item.albumAmount}
            imgName={item.imgName}
          />
        </>
      ))}
      <FooterContainer />
    </>
  );
}

export default ArtistComp;
