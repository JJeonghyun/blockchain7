let hiddenTitle = document.getElementsByClassName("hidden-title");
let titleButton = document.getElementsByClassName("title-button");
let dropDownButton = document.getElementsByClassName("dropdown-button");
let hiddenLiArtist = document.getElementsByClassName("hidden-li-artist");
let hiddenLiSchedule = document.getElementsByClassName("hidden-li-schedule");
let hiddenLi = document.getElementsByTagName("li");

let liArr = [hiddenLi[0], hiddenLi[1]];

window.onresize = () => {
  if (window.innerWidth > 769) hiddenTitle[0].style.display = "none";
};

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
