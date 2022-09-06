const comSel = [];

// // Math.random : 0 ~ 1 (0 이상 1미만 사이에서 랜덤한 숫자)
// for (
//   let tempNum = parseInt(Math.random() * 10);
//   comSel.length < 3;
//   tempNum = parseInt(Math.random() * 10)
// ) {
//   if (!comSel.includes(tempNum)) comSel.push(tempNum);
//   // includes메서드는 comSel에 tempNum가 포함 되어 있으면, 즉 중복이면 푸쉬하지않고 다시 뽑는다.
// }

// // for는 "변수를 초기화" 하고 실행하고, 조건을 확인 후 내용을 실행한다.
// // 내용 실행이 끝나면 "반복 후 변경점" 코드를 실행한다.
// // "반복 후 변경점" 코드 실행 후 조건을 확인하여 true면 내용을 실행한다.
// // 이후 "반복 후 변경점"을 실행 후 반복조건이 false 될때 까지 반복문이 실행 된다.
// console.log(comSel);

function comSelectFunc1() {
  for (; comSel.length < 3; ) {
    // for의 변수 초기화와 반복 후 변경점을 삭제했다
    const tempNum = parseInt(Math.random() * 10);
    // for 반복 내용에 tempNum를 초기화하여 comSel 배열을 확인 후 배열에
    // 추가하도록 수정했다.
    // 왜 위(comSelectFunc)에서 for 변수 초기화는 let인데 여기서는 왜 const인가?
    // comSelectFunc에서는 변수 초기화 후에 해당 변수를 계속 재정의하여
    // 확인해야하지만 여기서(comSelectFunc1)는 반복 내용에서 변수를 초기화 하기
    // 떄문에 재정의가 필요치 않아 const가 가능하다.
    console.log(tempNum);
    if (!comSel.includes(tempNum)) comSel.push(tempNum);
  }
}

console.log(comSel);

function comSelectFunc2() {
  while (comSel.length < 3) {
    // comSelectFunc2의 for문은 조건만 남아 있기 때문에 while로 대체가 가능하다.
    const tempNum = parseInt(Math.random() * 10);
    console.log(tempNum);
    if (!comSel.includes(tempNum)) comSel.push(tempNum);
  }
}
// comSelectFunc();
// comSelectFunc1();
comSelectFunc2();
// 함수를 호출함으로써 컴퓨터의 숫자를 3개 정한다.
// 3개의 함수 중 뭘 선택해도 상관은 없지만, 단 여러개의 함수를 호출 시 아래에서
// 호출된 것은 무시됨 (그 이유는 반복조건이 이미 충족이 되었기에 실행되지 않는다.)

console.log(comSel);
let count = 0;
while (true) {
  let playerSel = [];

  while (playerSel.length < 3) {
    const tempInput = prompt(`3자리의 수를 입력하시오. \n0으로 시작 가능/
    중복 숫자 불가`);
    // 입력창에 대해서 취소를 누르면, tempInput는 정의되지 않아서 undefined를
    // 갖게된다. 따라서 length를 갖지 못해 if에서 문제가 생기게 된다.
    if (!tempInput) {
      // tempInput이 undefined 혹은 빈 string ('') 일 때 false를 갖게되며
      // !를 사용하여 부정함으로써 빈값을 입력하거나 취소를 누르면 게임을 종료한다.
      alert("게임을 종료합니다.");
      break;
    }
    if (tempInput.length != 3 || isNaN(parseInt(tempInput))) {
      // isNaN 함수는 매개변수가 NaN, 즉 숫자가 아닌 문자를 강제로 숫자로
      // 바꿨는지 확인해준다.
      continue;
      // continue 밑 문장을 else로 묶으면 {tempInput.split("");
      //if (!comSel.includes(tempNum)) comSel.push(tempNum);} 로 의미가 같다.
      // 아래의 코드를 실행하지 않고 반복을 다시 시작한다.
    }
    tempInput.split("").forEach((item) => {
      // forEach는 배열의 아이템을 하나하나 가져와서 매개변수함수에 전달하여
      // 함수를 실행한다.
      // (item) => {내용} << 화살표 함수이다.
      // item은 tempInput.split("") 배열의 하나하나의 아이템이다.
      // function(item) {내용} 으로 대체 가능. (83번 ~ 85번 줄과 동일하다.)
      if (!playerSel.includes(parseInt(item))) playerSel.push(parseInt(item));
      // 컴퓨터가 선택한 랜덤 수는 정수이기에 플레이어가 입력한 숫자 또한 정수로 정의.
      // 컴퓨터가 선택한 랜덤 수와 마찬가지로 중복되면 안되기 때문에 playerSel 배열에
      // 숫자가 없는지 확인 후 추가한다.
    });

    //tempInput.split("").forEach(function (item) {
    //  if (!playerSel.includes(parseInt(item))) playerSel.push(parseInt(item));
    // });

    console.log(playerSel);

    // 위에 forEach는 아래의 코드로 대체할 수 있다.

    const tempArr = tempInput.split("");
    // tempArr이라는 변수로 배열을 정의한다. << 왜why? 그때그때마다 문자열(tempInput)
    // 을 split 메서드를 사용하여 짜르면 시간이 그만큼 늘어난다.
    for (let i = 0; i < tempArr.length; i++) {
      // 컴퓨터는 숫자를 0부터 세기 때문에 i(index)를 0부터 시작하여 tempArr 배열에
      // 끝까지 즉, 길이 -1 까지 코드를 실행한다.
      if (!playerSel.includes(parseInt(tempArr[i])))
        playerSel.push(parseInt(tempArr[i]));
    }
    console.log(playerSel);

    if (playerSel.length != 3) playerSel = [];
  }

  if (!playerSel.length) break;
  // 입력값이 없을 경우 playerSel은 빈 배열([]) 이 되므로 배열의 길이를 확인하여
  // break로 while문을 종료해준다.

  console.log("입력된 정상적인 플레이어의 선택 : " + playerSel);

  let tempNumber = comSel[0];
  let strike = 0;
  let ball = 0;
  let out = 0;
  // 플레이어가 선택 숫자 배열 중 첫번째 자리수와 컴퓨터 자리수를 확인
  if (playerSel[0] == tempNumber) {
    strike++;
  } else if (playerSel[1] == tempNumber || playerSel[2] == tempNumber) {
    ball++;
  } else {
    out++;
  }
  // 플레이어가 선택 숫자 배열 중 두번째 자리수와 컴퓨터 자리수를 확인
  tempNumber = comSel[1];
  if (playerSel[1] == tempNumber) {
    strike++;
  } else if (playerSel[0] == tempNumber || playerSel[2] == tempNumber) {
    ball++;
  } else {
    out++;
  }
  // 플레이어가 선택 숫자 배열 중 세번째 자리수와 컴퓨터 자리수를 확인
  tempNumber = comSel[2];
  if (playerSel[2] == tempNumber) {
    strike++;
  } else if (playerSel[0] == tempNumber || playerSel[1] == tempNumber) {
    ball++;
  } else {
    out++;
  }

  if (strike == 3) {
    // strike가 3이면 count를 출력하면서 break로  while문이 종료되고 아래
    // 코드는 실행되지 않는다.
    // 아래 코드는 count를 증가시키고, count, strike, ball, out을 표기해준다.
    alert(++count + "번 만에 성공하셨네요.");
    break;
  }

  alert(
    ++count +
      "번 시도함 / strike : " +
      strike +
      " / ball : " +
      ball +
      " / out : " +
      out
  );
}

// while (true){
//     break;
// }
// 왜 true를 넣었는지
// strike를 넣고 싶으면 while문 밖에서 선언해야한다.
// 왜 break로 멈추는지, true일때만 break로 멈춰야하는지
// true랑 break는 아무 관계가 없다.
