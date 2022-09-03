let a;

function hanoi(n) {
  if (n == 1) return 1;
  return hanoi(n - 1) + 1 + hanoi(n - 1);
  // return 2 * hanoi(n - 1) + 1;
}

a = prompt(`block의 수를 입력하세요.`);
console.log(`block의 수 : ${a} = 움직인 횟수 : ${hanoi(parseInt(a))}`);
