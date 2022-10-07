let imgId = document.getElementById("mainImg");
let moreClickSpan = document.getElementById("more-click");
let moreClick = document.getElementsByClassName("image-box");
let artist = document.getElementById("artist");
let hiddenBar = document.getElementById("hidden-bar");
let liArea = document.getElementById("li-area");
let liArea2 = document.getElementById("li-area2");

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

artist.addEventListener("mouseover", () => {
  hiddenBar.style.width = "fit-content";
  hiddenBar.style.height = "100px";
});
liArea.addEventListener("mouseover", () => {
  hiddenBar.style.width = "fit-content";
  hiddenBar.style.height = "100px";
});
liArea2.addEventListener("mouseover", () => {
  hiddenBar.style.width = "fit-content";
  hiddenBar.style.height = "100px";
});

// artist.addEventListener("mouseleave", () => {
//   hiddenBar.style.height = "0";
// });
