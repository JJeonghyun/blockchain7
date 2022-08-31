let i = 0;
// 반복할 때 i, j, k 이런식으로 변수를 선언한다.
// i가 뭘까? index의 약자 이다. git은 아예 다르게 index 라는 용어를 사용하고 있다.

// array[5] =  배열의 6번째 아이텥을 가져 온다. << 5 가 6번째 index 이다.

while (i < 10) {
  // while은 반복문의 명령어 중 하나 이다
  // () 안의 조건이 충족되면 실행 된다.
  // {} 안의 코드를 실행 한 후 ()안의 조건을 확인한다.
  console.log("i = " + ++i);
}

let j = 0;

while (j < 10) {
  console.log("j = " + j++);
  //   break;
}

while (true) {
  console.log(new Date());
  if (--i < 1) break;
  // break는 코드를 멈춘다. 즉, 반복을 멈추고 다음 코드 실행 한다.
}

let k = 0;
do {
  // do 는 while 조건을 확인하기 전에 실행한다.
  console.log("k = " + ++k);
  // k를 출력하고 조건을 확인한다.
} while (k < 10);

// do를 적는 것과 안적는 것의 차이가 무엇인가 ?

console.log(i);
while (i !== 0) {
  console.log("asdf");
}

do {
  console.log("asdf2");
} while (i !== 0);
