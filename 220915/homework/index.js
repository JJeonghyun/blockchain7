const title = document.getElementById("title");
let pTag = document.createElement("p");
let smallCircle = document.getElementById("small-circle");
let fastImg = document.querySelector(".small-circle");
let startGame = document.querySelector(".big-circle");
const startButton = document.getElementById("start-button");
const scissorsButton = document.getElementById("scissors");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const monitorItem = document.getElementsByClassName("monitor-item");
const numDiv = document.getElementsByClassName("num");

let money = 1000;
pTag.innerText = `coin : ${money} `;
title.appendChild(pTag);

let comRsp = [0, 1, 2]; // 0,1,2 : 가위, 바위, 보

let winCoin = [];
let coinSet = new Set();

// 큰 원판에 랜덤(1-20) 숫자 넣기 위해 숫자 뽑기
while (coinSet.size < 16) {
  coinSet.add(parseInt(Math.random() * 20 + 1));
  // 1-21
  console.log(coinSet);
}
winCoin = [...coinSet];

// 큰 원판에 랜덤(1-20) 숫자 넣기
for (let i = 0; i < numDiv.length; i++) {
  numDiv[i].innerText = winCoin[i];
  console.log(numDiv[i].innerText);
}

// 게임 대기 화면은 큰 원판이 돌아가며, 비교적 느린 속도로 가위바위보 순환
//시작 버튼을 눌렀을 때 큰 원판을 정지, 가위바위보 반복 speed Up
const start = function () {
  pTag.innerText = `coin : ${(money -= 100)}`;

  startGame.style.animation = "loop-circle 0s linear infinite";
  fastImg.style.animation = "loop-img 0.5s infinite linear";
};

// 가위 버튼을 눌렀을 때
const scissorsClick = function () {
  // 누른걸 인지하기 위해 잠시 투명도 조절
  scissorsButton.style.opacity = "0.5";

  // 2초뒤 버튼 원상 복구
  setTimeout(() => {
    scissorsButton.style.opacity = "1";
  }, 2000);

  // 플레이어랑 비교하기 위해  가위,바위,보 중 랜덤으로 하나 뽑기
  let tempRsp = comRsp[Math.floor(Math.random() * 3)];

  // 플레이어랑 비교
  if (scissorsButton.value == tempRsp) {
    console.log("비김");
    // 해당 이미지를 보여주기 위해 애니메이션을 정지하고 해당 이미지 출력
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./0.png')";

    // 비겼을 때 효과를 위해 클래스 추가
    monitorItem[3].classList.add("draw");

    // 플레이어가 눈으로 인지할 수 있도록 잠시 보여주기
    setTimeout(() => {
      fastImg.style.animation = "loop-img 0.5s infinite linear 2s";
      monitorItem[3].classList = "monitor-item";
      scissorsButton.addEventListener("click", scissorsClick);
    }, 2000);
  } else if (tempRsp == 1) {
    console.log("졌네");
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./1.png')";

    monitorItem[2].classList.add("lose");

    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[2].classList = "monitor-item";
      scissorsButton.addEventListener("click", scissorsClick);
      alert("패배! 게임시작을 다시 눌러주세요");
    }, 2000);
  } else {
    console.log("이겻네");
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./2.png')";

    monitorItem[0].classList.add("win1");
    monitorItem[1].classList.add("win2");

    pTag.innerText = `coin : ${(money += 100)}`;

    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[0].classList = "monitor-item";
      monitorItem[1].classList = "monitor-item";
      scissorsButton.addEventListener("click", scissorsClick);
      alert("이겼습니다! 축하드립니다~!");
    }, 2000);
  }
};

// 바위 버튼을 눌렀을 때
const rockClick = function () {
  rockButton.style.opacity = "0.5";

  setTimeout(() => {
    rockButton.style.opacity = "1";
  }, 2000);

  let tempRsp = comRsp[Math.floor(Math.random() * 3)];

  if (rockButton.value == tempRsp) {
    console.log("비김");
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./1.png')";

    monitorItem[3].classList.add("draw");

    setTimeout(() => {
      fastImg.style.animation = "loop-img 0.5s infinite linear 2s";
      monitorItem[3].classList = "monitor-item";
      rockButton.addEventListener("click", rockClick);
    }, 2000);
  } else if (tempRsp == 2) {
    console.log("졌네");
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./2.png')";

    tempItem = [...monitorItem];
    monitorItem[2].classList.add("lose");

    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[2].classList = "monitor-item";
      rockButton.addEventListener("click", rockClick);
      alert("패배! 게임시작을 다시 눌러주세요");
    }, 2000);
  } else {
    console.log("이겻네");
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./0.png')";

    tempItem = [...monitorItem];
    monitorItem[0].classList.add("win1");
    monitorItem[1].classList.add("win2");

    pTag.innerText = `coin : ${(money += 100)}`;

    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[0].classList = "monitor-item";
      monitorItem[1].classList = "monitor-item";
      rockButton.addEventListener("click", rockClick);
      alert("이겼습니다! 축하드립니다~!");
    }, 2000);
  }
};

// 버튼을 눌렀을 때
const paperClick = function () {
  fastImg.style.animation = "loop-img 0.5s ease-out linear";
  paperButton.style.opacity = "0.5";

  setTimeout(() => {
    paperButton.style.opacity = "1";
  }, 2000);

  let tempRsp = comRsp[Math.floor(Math.random() * 3)];
  console.log(tempRsp);

  console.log(paperButton.value);

  if (paperButton.value == tempRsp) {
    console.log("비김");
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./2.png')";

    tempItem = [...monitorItem];
    monitorItem[3].classList.add("draw");

    setTimeout(() => {
      fastImg.style.animation = "loop-img 0.5s infinite linear 2s";
      monitorItem[3].classList = "monitor-item";
      paperButton.addEventListener("click", paperClick);
    }, 2000);
  } else if (tempRsp == 1) {
    console.log("졌네");
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./0.png')";

    tempItem = [...monitorItem];
    monitorItem[2].classList.add("lose");

    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[2].classList = "monitor-item";
      paperButton.addEventListener("click", paperClick);
      alert("패배! 게임시작을 다시 눌러주세요");
    }, 2000);
  } else {
    console.log("이겻네");
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./1.png')";

    tempItem = [...monitorItem];
    monitorItem[0].classList.add("win1");
    monitorItem[1].classList.add("win2");

    pTag.innerText = `coin : ${(money += 100)}`;

    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[0].classList = "monitor-item";
      monitorItem[1].classList = "monitor-item";
      paperButton.addEventListener("click", paperClick);
      alert("이겼습니다! 축하드립니다~!");
    }, 2000);
  }
};

startButton.addEventListener("click", start);

scissorsButton.addEventListener("click", scissorsClick);

rockButton.addEventListener("click", rockClick);

paperButton.addEventListener("click", paperClick);
