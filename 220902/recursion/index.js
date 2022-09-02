// 재귀함수란 ? 자기 자신을 호출하는 함수이다.
// 거의 쓸일이 없지만 기억은 해두자

function factorial(num) {
  if (num == 1) return 1;
  console.log("현재 숫자 : " + num);

  return num * factorial(num - 1);
  // factorial 함수가 factorial 함수를 호출 했다. return에서
  //
}
console.log("1! 진행");
console.log("1! :" + factorial(1));
console.log("1! 끝");
console.log("2! 진행");
console.log(factorial(2));
console.log("2! 끝");
console.log("3! 진행");
console.log(factorial(3));
console.log("3! 끝");
console.log("4! 진행");
console.log(factorial(4));
console.log("4! 끝");
