// 숫자 2개 선택 << 2개의 숫자를 저장해야함
// 플레이어가 선택한 숫자를 기억해야하기에

let firstNum, secondNum;
let num;
let clickCount = 0; // 카운트 변수를 써서 하는 법
// 안쓰면 firstNum가 비어 있는지 << 정의가 되지 않았는지 << undefined(정의가 되지 않은 변수의 값)|| null

// clickCount 변수가 무슨 용도인가 -> 몇번 클릭했는지 즉, 클릭을 한 횟수

function numSel() {
  if (clickCount == 0) {
    // console.log(clickCount);
    firstNum = 7;
  } else if (!clickCount == 1) {
    // console.log("clickCount");
    // console.log(clickCount);
    secondNum = 7;
  } else {
  }
  clickCount++; // 클릭했을 때 클릭한 횟수 증가
}

function numSel(num) {
  // let num; << 위에 바로 (num) 과 같다.
  // 함수 스코프({}) 안에서만 사용 된다.
  // 함수 밖에서 선언된 전역변수, 지역변수 등 다른 '이름이 같은 다른 변수'와 다른 변수다
  // 밖에서 num = 1; 했어도 안에서는 undefined가 뜰 수 있다. << 호출 시 () 안이 비어 있다.
  // 이후 HTML 12번 줄에서 ()안에 7을 넣음으로써 "num = 7"로 정의 한다.
  if (clickCount == 0) {
    firstNum = num;
  } else if (!clickCount == 1) {
    secondNum = num;
  } else {
  }
  clickCount++;
}

// function numSel1() {
//   if (clickCount == 0) {
//     firstNum = 8;
//   } else if (!clickCount == 1) {
//     secondNum = 8;
//   } else {
//   }
//   clickCount++;
// }

// const tempArr = []
// temArr.push();

// function numSel() {
// clickCount++; // 클릭했을 때 클릭한 횟수 증가
//     if (clickCount == 1) {
//       console.log(clickCount);
//      카운트를 증가시키는 코드(clickCount++) 이 위에 있기 떄문에 1이 증가한 상태로 확인
//     } else if (!clickCount == 2) {
//       console.log("clickCount");
//       console.log(clickCount);
//     } else {
//       console.log(clickCount);
//     }
//
//     firstNum = 7;
//   }

function calculate(order) {
  if (clickCount < 2) return;
  // clickCount 가 2미만 일 때, 즉 0 이거나 1일때, 다른 말로 숫자 클릭을 2번 이상 하지 않았을 때
  // 즉, 숫자가 2개가 선택 아닐 때, return일 사용해서 함수를 멈춘다.
  switch (order) {
    case "+":
      alert(firstNum + secondNum);
      break;
    case "-":
      alert(firstNum - secondNum);
      break;
    case "*":
      alert(firstNum * secondNum);
      break;
    case "/":
      alert(firstNum / secondNum);
      break;
    case "%":
      alert(firstNum % secondNum);
      break;
  }
}

function check() {
  // check 함수를 이용하여 현재 저장된 숫자(변수)들을 확인한다.
  console.log(firstNum);
  console.log(secondNum);
}
