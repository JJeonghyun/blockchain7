let firstNum = 0;
let secondNum = 0;

function plus1() {
  firstNum++; // firstNum 를 하나 증가 시킨다.
  console.log(firstNum); // firstNum를 콘솔 창에 출력한다.
  return firstNum;
}

function plus2() {
  secondNum++; // secondNum 를 하나 증가 시킨다.
  console.log(secondNum); // secondNum를 콘솔 창에 출력한다.
  return secondNum;
}

function result() {
  //   console.log(firstNum + secondNum);
  return console.log(firstNum + secondNum);
}

function examAddFN(firstNum) {
  //  매개변수는 위에 변수와 다른 변수가 된다.
  //  1번줄에서 선언한 firstNum와 매개변수로 선언된
  //  firstNum는 엄연히 다른 놈이다.
  console.log(firstNum);
  firstNum++;
  firstNum += 1;
  firstNum = firstNum + 1;
  console.log(firstNum);
}

examAddFN(); // < 매개 변수가 없다. 21번째 줄의 firstNum는 undefined
