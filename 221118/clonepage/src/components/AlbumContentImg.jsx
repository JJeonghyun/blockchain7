import React from "react";

function AlbumContentImg({ lineNum, imgName }) {
  function insertImg() {
    let tempArr = [];
    for (let i = 6 * lineNum - 5; i < 6 * lineNum + 1; i++) {
      tempArr.push(
        <div>
          <div>
            <img src={`imgs/${i}${imgName}Img.jpg`} />
          </div>
          <div>{imgName}</div>
        </div>
      );
    }
    return tempArr;
  }
  return <div>{insertImg()}</div>;
}
export default AlbumContentImg;

// 변수 {앨범이름} + 앨범 (변수 {singerName} + Albums)
// albumName
