const title = document.getElementById("title");

let smallCircle = document.getElementById("small-circle");
let fastImg = document.querySelector(".small-circle");
let startGame = document.querySelector(".big-circle");
const startButton = document.getElementById("start-button");
const scissorsButton = document.getElementById("scissors");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");

let money = 1000;

const start = function () {
  let pTag = document.createElement("p");
  pTag.innerText = `coin : ${money} `;

  title.appendChild(pTag);
  pTag.innerText = `coin : ${(money -= 100)}`;

  startGame.style.animation = "loop-circle 0s linear infinite";
  fastImg.style.animation = "loop-img 0.5s infinite linear";
};

const scissorsClick = function () {
  fastImg.style.animation = "loop-img 0.5s ease-out linear";
  scissorsButton.style.opacity = "0.5";
};

startButton.addEventListener("click", start);
scissorsButton.addEventListener("click", scissorsClick);
rockButton.addEventListener("click", function () {});
paperButton.addEventListener("click", function () {});
