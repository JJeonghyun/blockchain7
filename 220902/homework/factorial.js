let a;

// // 팩토리얼
// function factorial(n) {
//   // n! = n * (n-1) * (n-2) * (n-3) * ... * 3 * 2 * 1
//   // n! = n * (n-1)!
//   // 1! = 1
//   // 2! = 2 * 1!
//   // 3! = 3 * 2 * 1, 3 * 2!
//   // 4! = 4 * 3 * 2 * 1, 4 * 3!
//   // 5! = 5 * 4 * 3 * 2 * 1, 5 * 4!
//   console.log(`입력한 수 : ${n} `);
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }

// 팩토리얼 재귀함수 이용
function factorial1(n) {
  if (n == 1) return 1;
  return n * factorial1(n - 1);
}

a = prompt(`재귀함수를 이용한 팩토리얼을 실행할 숫자를 입력하세요.`);
// console.log(`${a}! = ${factorial(parseInt(a))}`);
console.log(`${a}! = ${factorial1(parseInt(a))}`);
