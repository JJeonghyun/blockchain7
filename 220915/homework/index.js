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

// 큰 원판 숫자들 반짝이는 효과를 위한 빈 배열 초기화
let numBlink = [];

// 타 버튼 클릭 방지 변수 초기화
let checkButton = -1;
// 초기 자금 초기화
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
  if (checkButton >= 1) {
    // 연달아 게임시작 버튼 누르는 거 방지
    alert(`한번만.. 눌러요..`);
    return;
  } else if (money < 100) {
    // 게임 머니 100원 이하 일 떄
    alert(`돈 다 날아갔쥬 ?`);
    return;
  } else {
    checkButton++;

    // 시작 버튼 누를 시 자금 차감
    pTag.innerText = `coin : ${(money -= 100)}`;

    // 큰 원판은 회전을 멈추고, 이미지 순환 속도 올리기
    startGame.style.animation = "loop-circle 0s linear infinite";
    fastImg.style.animation = "loop-img 0.5s infinite linear";
  }
};

// 가위 버튼을 눌렀을 때
const scissorsClick = function () {
  // 게임 시작 전에 누르는 걸 방지
  if (checkButton == -1) return;

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
    }, 2000);
  } else if (tempRsp == 1) {
    console.log("졌네");
    // 해당 이미지를 보여주기 위해 애니메이션을 정지하고 해당 이미지 출력
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./1.png')";

    // 졌을 때 효과를 위해 클래스 추가
    monitorItem[2].classList.add("lose");

    // 플레이어가 눈으로 인지할 수 있도록 잠시 보여주기
    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[2].classList = "monitor-item";
      alert("패배! 게임시작을 다시 눌러주세요");
    }, 2000);

    //예외 처리를 위해 재정의
    checkButton = -1;
  } else {
    console.log("이겻네");
    // 해당 이미지를 보여주기 위해 애니메이션을 정지하고 해당 이미지 출력
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./2.png')";

    // 졌을 때 효과를 위해 클래스 추가
    monitorItem[0].classList.add("win1");
    monitorItem[1].classList.add("win2");

    // 플레이어가 눈으로 인지할 수 있도록 잠시 보여주기
    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[0].classList = "monitor-item";
      monitorItem[1].classList = "monitor-item";
      alert("이겼습니다! 축하드립니다~!");
    }, 1500);

    // 이겼을 때 숫자들 반짝거리는 애니메이션을 위해 클래스 추가
    numBlink = [...numDiv];
    for (let i = 0; i < numBlink.length; i++) {
      numBlink[i].classList.add("numEffect");
    }
    setTimeout(() => {
      for (let i = 0; i < numBlink.length; i++) {
        numBlink[i].classList.remove("numEffect");
      }
    }, 3000);

    // 난수를 뽑아서 해당 수 * 10으로 코인 획득
    let tempNum = winCoin[parseInt(Math.random() * 16)];

    setTimeout(() => {
      pTag.innerText = `coin : ${(money += tempNum * 10)}`;
      alert(`${tempNum * 10} 만큼 코인을 획득 했습니다.`);
    }, 3000);

    // 예외 처리를 위해 재정의
    checkButton = -1;
  }
};

// 바위 버튼을 눌렀을 때
const rockClick = function () {
  // 게임 시작 전에 누르는 걸 방지
  if (checkButton == -1) return;
  // 누른걸 인지하기 위해 잠시 투명도 조절
  rockButton.style.opacity = "0.5";

  // 2초뒤 버튼 원상 복구
  setTimeout(() => {
    rockButton.style.opacity = "1";
  }, 2000);

  // 플레이어랑 비교하기 위해  가위,바위,보 중 랜덤으로 하나 뽑기
  let tempRsp = comRsp[Math.floor(Math.random() * 3)];

  // 플레이어랑 비교
  if (rockButton.value == tempRsp) {
    console.log("비김");
    // 해당 이미지를 보여주기 위해 애니메이션을 정지하고 해당 이미지 출력
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./1.png')";

    // 비겼을 때 효과를 위해 클래스 추가
    monitorItem[3].classList.add("draw");

    // 해당 이미지를 보여주기 위해 애니메이션을 정지하고 해당 이미지 출력
    setTimeout(() => {
      fastImg.style.animation = "loop-img 0.5s infinite linear 2s";
      monitorItem[3].classList = "monitor-item";
    }, 2000);
  } else if (tempRsp == 2) {
    console.log("졌네");
    // 해당 이미지를 보여주기 위해 애니메이션을 정지하고 해당 이미지 출력
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./2.png')";

    // 졌을 때 효과를 위해 클래스 추가
    monitorItem[2].classList.add("lose");

    // 해당 이미지를 보여주기 위해 애니메이션을 정지하고 해당 이미지 출력
    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[2].classList = "monitor-item";
      alert("패배! 게임시작을 다시 눌러주세요");
    }, 2000);
    // 타 버튼 방지 변수 재정의
    checkButton = -1;
  } else {
    console.log("이겻네");
    // 이겼을 때 이미지 출력
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./0.png')";

    // 이긴 후 효과를 주기 위해 클래스 추가
    monitorItem[0].classList.add("win1");
    monitorItem[1].classList.add("win2");

    // 이긴 화면을 정지하여 플레이어가 볼 수 있도록
    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[0].classList = "monitor-item";
      monitorItem[1].classList = "monitor-item";
      alert("이겼습니다! 축하드립니다~!");
    }, 1500);

    // 이겼을 때 숫자들 반짝거리는 애니메이션을 위해 클래스 추가
    numBlink = [...numDiv];
    for (let i = 0; i < numBlink.length; i++) {
      numBlink[i].classList.add("numEffect");
    }
    setTimeout(() => {
      for (let i = 0; i < numBlink.length; i++) {
        numBlink[i].classList.remove("numEffect");
      }
    }, 3000);

    // 난수를 뽑아서 해당 수 * 10으로 코인 획득
    let tempNum = winCoin[parseInt(Math.random() * 16)];

    setTimeout(() => {
      pTag.innerText = `coin : ${(money += tempNum * 10)}`;
      alert(`${tempNum * 10} 만큼 코인을 획득 했습니다.`);
    }, 3000);
    // 타 버튼 방지 변수 재정의
    checkButton = -1;
  }
};

// 보 버튼을 눌렀을 때
const paperClick = function () {
  // 게임 시작 전에 누르는 걸 방지
  if (checkButton == -1) return;
  // 누른걸 인지하기 위해 잠시 투명도 조절
  paperButton.style.opacity = "0.5";

  // 2초뒤 버튼 원상 복구
  setTimeout(() => {
    paperButton.style.opacity = "1";
  }, 2000);

  // 플레이어랑 비교하기 위해  가위,바위,보 중 랜덤으로 하나 뽑기
  let tempRsp = comRsp[Math.floor(Math.random() * 3)];

  // 플레이어랑 비교
  if (paperButton.value == tempRsp) {
    console.log("비김");
    // 해당 이미지를 보여주기 위해 애니메이션을 정지하고 해당 이미지 출력
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./2.png')";

    // 졌을 때 효과를 위해 클래스 추가
    monitorItem[3].classList.add("draw");

    // 플레이어가 눈으로 인지할 수 있도록 잠시 보여주기
    setTimeout(() => {
      fastImg.style.animation = "loop-img 0.5s infinite linear 2s";
      monitorItem[3].classList = "monitor-item";
    }, 2000);
  } else if (tempRsp == 1) {
    console.log("졌네");
    // 해당 이미지를 보여주기 위해 애니메이션을 정지하고 해당 이미지 출력
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./0.png')";

    // 졌을 때 효과를 위해 클래스 추가
    monitorItem[2].classList.add("lose");

    // 플레이어가 눈으로 인지할 수 있도록 잠시 보여주기
    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[2].classList = "monitor-item";
      alert("패배! 게임시작을 다시 눌러주세요");
    }, 2000);
    // 예외 처리
    checkButton = -1;
  } else {
    console.log("이겻네");
    // 해당 이미지를 보여주기 위해 애니메이션을 정지하고 해당 이미지 출력
    fastImg.style.animation = "loop-img 0s infinite linear";
    fastImg.style.backgroundImage = "url('./1.png')";

    // 졌을 때 효과를 위해 클래스 추가
    monitorItem[0].classList.add("win1");
    monitorItem[1].classList.add("win2");

    // 플레이어가 눈으로 인지할 수 있도록 잠시 보여주기
    setTimeout(() => {
      fastImg.style.animation = "loop-img 3s infinite linear 2s";
      startGame.style.animation = "loop-circle 3s linear infinite";
      monitorItem[0].classList = "monitor-item";
      monitorItem[1].classList = "monitor-item";
      alert("이겼습니다! 축하드립니다~!");
    }, 1500);

    // 이겼을 때 숫자들 반짝거리는 애니메이션을 위해 클래스 추가
    numBlink = [...numDiv];
    for (let i = 0; i < numBlink.length; i++) {
      numBlink[i].classList.add("numEffect");
    }
    setTimeout(() => {
      for (let i = 0; i < numBlink.length; i++) {
        numBlink[i].classList.remove("numEffect");
      }
    }, 3000);

    // 난수를 뽑아서 해당 수 * 10으로 코인 획득
    let tempNum = winCoin[parseInt(Math.random() * 16)];

    setTimeout(() => {
      pTag.innerText = `coin : ${(money += tempNum * 10)}`;
      alert(`${tempNum * 10} 만큼 코인을 획득 했습니다.`);
    }, 3000);
    // 예외처리를 위해 재정의
    checkButton = -1;
  }
};

startButton.addEventListener("click", start);

scissorsButton.addEventListener("click", scissorsClick);

rockButton.addEventListener("click", rockClick);

paperButton.addEventListener("click", paperClick);
