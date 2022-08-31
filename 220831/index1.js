let x;
let count = 0;
// 1 ~ 100 사이에 수 입력 하기
let n = Number(prompt("1 ~ 100 의 수를 입력 해보세요."));
// console.log(n);

// 컴퓨터가 저장 한 난수 저장
x = Math.floor(Math.random() * (100 - 1) + 1);
// console.log(x);
while (n != x) {
  if (n > x) {
    console.log("Up");
  } else if (n < x) {
    console.log("Down");
  } else {
    console.log("축하 합니다. " + count + "번 입력 하셨습니다.");
    break;
  }
  ++count;
}
