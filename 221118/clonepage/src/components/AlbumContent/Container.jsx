import AlbumContentComp from "./Comp";

const AlbumContentContainer = ({ albumAmount, imgName }) => {
  let tempArr = [];
  for (let i = 0; i < albumAmount; i++) {
    tempArr.push(i);
  }

  return <AlbumContentComp imgName={imgName} tempArr={tempArr} />;
};
export default AlbumContentContainer;
