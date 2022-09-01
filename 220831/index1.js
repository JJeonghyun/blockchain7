// let myNum, comNum;
// let count = 0;

// // 컴퓨터가 저장 한 난수 저장
// myNum = Math.floor(Math.random() * (100 - 1) + 1);
// comNum = Number(prompt("1 ~ 100 의 수를 입력 해보세요."));
// while (comNum != myNum) {
//   // 1 ~ 100 사이에 수 입력 하기
//   if (comNum > myNum) {
//     console.log(comNum);
//     console.log(myNum);
//     console.log("Up");
//     comNum = Number(prompt(""));
//     ++count;
//   } else if (comNum < myNum) {
//     console.log(comNum);
//     console.log(myNum);
//     console.log("Down");
//     comNum = Number(prompt(""));
//     ++count;
//   } else {
//     console.log(comNum);
//     console.log(myNum);
//     console.log("정답입니다 " + count + "번 입력해서 맞췄습니다.");
//     break;
//   }
// }

// parseInt(**) : 정수화 함수

const comNum = parseInt(Math.random() * 99) + 1;
// 컴퓨터 함수
let myNum;
let count = 0;
let max = 100;
let min = 0;
let updown = "";
const maxCount = parseInt(prompt("몇번만에 맞출래 ? 숫자로만"));
do {
  myNum = prompt(`${updown} \n숫자를 선택해 주세요 .\n  
컴퓨터가 선택한 숫자를 맞춰시면 됩니다.\n 최소 : ${min} / 최대 :${max} / 남은 횟수 : ${
    maxCount - count
  }`); // prompt는 string, parseInt
  // 정수형으로 형변환을 해주기 떄문에 number.

  myNum = parseInt(myNum);
  if (min > myNum || max < myNum) {
    // 최소와 최대 사이의 값만 확인하기 위해 최소 미만과 최대 초과를
    // 먼저 처리 한다.
    console.log("제외된 숫자들임");
  } else if (myNum === comNum) {
    console.log(`${count}번 만에 맞췄네? ㅊㅋ`);
    //console.log( count + `번 만에 맞췄네? ㅊㅋ`);
    break;
  } else if (myNum > comNum) {
    // 플레이어가 선택한 숫자가 컴퓨타가 선택한 숫자 보다 크다.
    max = myNum;
    // 그러므로 현재 플레이어가 선택한 숫자가 max가 된다.
    console.log("UP!");
    updown = "up";
    count++;
    // 정상적인 숫자를 입력 했을 때만 카운트를 늘리도록 UP, DOWN일 때
    // 카운트를 추가 한다.
  } else if (myNum < comNum) {
    // 플레이어가 선택한 숫자가 컴퓨타가 선택한 숫자 보다 작다.
    min = myNum;
    // 그러므로 현재 플레이어가 선택한 숫자가 min가 된다.
    console.log("DOWN!");
    updown = "down";
    count++;
    // 정상적인 숫자를 입력 했을 때만 카운트를 늘리도록 UP, DOWN일 때
    // 카운트를 추가 한다.
  } else {
    console.log("숫자만 ! 쫌!!!!");
    updown = " 숫자만 !!!! 아으!!!";
  }
} while (myNum !== comNum && count < maxCount);
if (count >= maxCount) {
  console.log("제한 횟수를 초과 했네요 풉ㅋ");
}
// 컴퓨터가 숫자 선택 후 플레이어가 선택하는 것은 계속 반복 되어야 한다.
// 플레이어가 컴퓨터의 숫자를 맞출때 까지

// 1 < 2 && 4 < 3  => false

// 10 < 5 || 6 ==> true

// 10 < 5 || 6 < 5 ==> false

// 10 < 5 || (6 < 5 && 6 ) ==> false

// (10 < 5 || 6 < 5) && 6 < 3  == > false
