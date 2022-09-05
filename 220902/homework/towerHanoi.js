let a, b, c, d;
let count = 0;

function blockMove(start, end) {
  console.log(`타워${start}에 
  block을 타워${end}로 이동`);
}

function towerHanoi(n, start, mid, end) {
  if (n === 1) {
    blockMove(start, end);
    count++;
  } else {
    towerHanoi(n - 1, start, end, mid);
    blockMove(start, end);
    count++;
    towerHanoi(n - 1, mid, start, end);
  }
}

a = prompt(`block의 수를 입력하세요.`);
b = prompt(`시작타워의 번호를 입력하세요.`);
c = prompt(`경유타워의 번호를 입력하세요.`);
d = prompt(`도착타워의 번호를 입력하세요.`);

towerHanoi(a, b, c, d);
console.log(`
block의 수 : ${a}
block의 이동 횟수 : ${count}
`);

// function blockMove(n, start, end){
//   if(n==1){
//     console.log(`${n}개를 타워${start}에서  타워${end}로 이동한다.`);
//     return 1;
//   } return
// }

// function hanoi(n) {
//   const block = [];

//   function towerHanoi(n, start, mid, end) {
//     if (n === 1) {
//       block.push([start, end]);
//       return;
//     } else {
//       towerHanoi(n - 1, start, end, mid);
//       block.push([start, end]);

//       towerHanoi(n - 1, mid, start, end);
//     }
//   }

//   towerHanoi(n, 1, 2, 3);

//   return block;
// }
// a = parseInt(prompt(`block의 수를 입력하세요.`));

// console.log(hanoi(a));
// console.log(`block의 수 : ${a}개
// 이동 횟수 : ${hanoi(a).length}
// `);

// console.log(`block의 수 : ${a}개
// 시작 타워 : ${b}
// 경유 타워 : ${c}
// 도착 타워 : ${d}
// 블록의 움직인 횟수 : ${towerHanoi(parseInt(a), b, c, d)}`);

// else if (n === 2) {
//   console.log(
//     `제일 큰 블록을 뺀 나머지블록을 시작타워에서 경유할 타워로 이동`
//   );
//   towerHanoi(1);
//   console.log(`경유지할 타워에 있는 블록을 최종도착타워로 이동`);
//   return 3;
// }
