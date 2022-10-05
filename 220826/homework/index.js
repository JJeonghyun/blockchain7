let imgId = document.getElementById("mainImg");

let imgArr = new Array();
imgArr[0] = "./Img/MainImg.jpg";
imgArr[1] = "./Img/MainImg2.jpg";
let repeatNum = -1;
function repeatImg() {
  repeatNum++;
  if (repeatNum < imgArr.length) {
    imgId.src = imgArr[repeatNum];
    setTimeout(repeatImg, 5000);
  } else {
    repeatNum = -1;
    setTimeout(repeatImg, 100);
  }
}
