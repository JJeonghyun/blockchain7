import React from "react";

function AlbumContentImg({ line, imgName, albumAmount }) {
  function insertImg() {
    let tempArr = [];
    if (6 * line + 1 > albumAmount) {
      for (let i = 6 * line - 5; i < albumAmount + 1; i++) {
        tempArr.push(
          <div key={i}>
            <div key={i}>
              <img src={`imgs/${imgName}Img${i}.jpg`} alt="didi" />
            </div>
            <div key={i}>
              {i}집 {imgName}
            </div>
          </div>
        );
      }
    } else if (6 * line + 1 < albumAmount) {
      for (let i = 6 * line - 5; i < 6 * line + 1; i++) {
        tempArr.push(
          <div key={i}>
            <div key={i}>
              <img src={`imgs/${imgName}Img${i}.jpg`} alt="didi" />
            </div>
            <div key={i}>
              {i}집 {imgName}
            </div>
          </div>
        );
      }
    }
    return tempArr;
  }
  return <div>{insertImg()}</div>;
}
export default AlbumContentImg;
