let imgId = document.getElementById("mainImg");
let moreClickSpan = document.getElementById("more-click");
let moreClick = document.getElementsByClassName("image-box");
let artist = document.getElementById("artist");
let hiddenTitle = document.getElementsByClassName("hidden-title");
let titleButton = document.getElementsByClassName("title-button");
let dropDownButton = document.getElementsByClassName("dropdown-button");
let hiddenLiArtist = document.getElementsByClassName("hidden-li-artist");
let hiddenLiSchedule = document.getElementsByClassName("hidden-li-schedule");

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

// artist.addEventListener("mouseover", () => {
//   hiddenBar.style.width = "fit-content";
//   hiddenBar.style.height = "100px";
// });

// artist.addEventListener("mouseleave", () => {
//   hiddenBar.style.height = "0";
// });
[...titleButton].forEach((elem) => {
  elem.addEventListener("click", () => {
    if (hiddenTitle[0].style.display == "none")
      hiddenTitle[0].style.display = "block";
    else hiddenTitle[0].style.display = "none";
  });
});
dropDownButton[0].addEventListener("click", () => {
  [...hiddenLiArtist].forEach((elem) => {
    if (elem.style.display == "block") elem.style.display = "none";
    else elem.style.display = "block";
  });
});
dropDownButton[1].addEventListener("click", () => {
  [...hiddenLiSchedule].forEach((elem) => {
    if (elem.style.display == "block") elem.style.display = "none";
    else elem.style.display = "block";
  });
});
