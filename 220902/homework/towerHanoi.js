let a;

function towerHanoi(n) {
  if (n == 1) return 1;
  return towerHanoi(n - 1) + 1 + towerHanoi(n - 1);
  // return 2 * towerHanoi(n - 1) + 1;
}

a = prompt(`block의 수를 입력하세요.`);
console.log(`block의 수 : ${a}개 
블록의 움직인 횟수 : ${towerHanoi(parseInt(a))}`);
