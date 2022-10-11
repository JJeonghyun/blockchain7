let hiddenTitle = document.getElementsByClassName("hidden-title");
let titleButton = document.getElementsByClassName("title-button");
let dropDownButton = document.getElementsByClassName("dropdown-button");
let hiddenLiArtist = document.getElementsByClassName("hidden-li-artist");
let hiddenLiSchedule = document.getElementsByClassName("hidden-li-schedule");

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
