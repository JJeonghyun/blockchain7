let imgId = document.getElementById("mainImg");
let moreClickSpan = document.getElementById("more-click");
let moreClick = document.getElementsByClassName("image-box");
let artist = document.getElementById("artist");
let hiddenTitle = document.getElementsByClassName("hidden-title");
let titleButton = document.getElementsByClassName("title-button");
let dropDownButton = document.getElementsByClassName("dropdown-button");
let hiddenLiArtist = document.getElementsByClassName("hidden-li-artist");
let hiddenLiSchedule = document.getElementsByClassName("hidden-li-schedule");
let hiddenLi = document.getElementsByTagName("li");

let liArr = [hiddenLi[0], hiddenLi[1]];

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
window.onload = () => {
  repeatNum++;
  if (repeatNum < imgArr.length) {
    imgId.src = imgArr[repeatNum];
    setTimeout(repeatImg, 5000);
  } else {
    repeatNum = -1;
    setTimeout(repeatImg, 100);
  }
};
moreClickSpan.addEventListener("click", () => {
  if (moreClick[1].style.display == "block") {
    moreClick[1].style.display = "none";
    moreClickSpan.innerText = "see more";
  } else {
    moreClick[1].style.display = "block";
    moreClickSpan.innerText = "see stop";
  }
});
[...titleButton].forEach((elem) => {
  elem.addEventListener("click", () => {
    if (hiddenTitle[0].style.display == "none")
      hiddenTitle[0].style.display = "block";
    else hiddenTitle[0].style.display = "none";
  });
});

dropDownButton[0].addEventListener("click", () => {
  [...liArr].forEach((elem) => {
    elem.classList.toggle("appear");
  });
  if (dropDownButton[0].style.paddingBottom == "") {
    dropDownButton[0].style.paddingBottom = "104px";
  } else if (dropDownButton[0].style.paddingBottom == "104px") {
    dropDownButton[0].style.paddingBottom = "";
  }
});
dropDownButton[1].addEventListener("click", () => {
  hiddenLi[2].classList.toggle("appear");
  if (dropDownButton[1].style.paddingBottom == "") {
    dropDownButton[1].style.paddingBottom = "55px";
  } else if (dropDownButton[1].style.paddingBottom == "55px") {
    dropDownButton[1].style.paddingBottom = "";
  }
});
