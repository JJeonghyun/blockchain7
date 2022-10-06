let imgId = document.getElementById("mainImg");
let moreClickSpan = document.getElementById("more-click");
let moreClick = document.getElementsByClassName("image-box");

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
function openSeeMore() {
  if (moreClick[1].style.display == "block") {
    moreClick[1].style.display = "none";
    moreClickSpan.innerText = "see more";
  } else {
    moreClick[1].style.display = "block";
    moreClickSpan.innerText = "see stop";
  }
}
