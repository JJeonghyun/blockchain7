function* what() {
  // function* : generator 선언문
  // generator : yield를 사용해서 함수를 중간에 멈추는 함수
  try {
    // try : 코드를 실행 하되, 문제가 있을 시 catch로 전달 한다
    // 문제가 발생할지도 모르는 코드를 사용 시 사용한다
    // 서버에 요청 시에 가장 많이 사용한다
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i;
      // 함수 호출 시 여기서 멈춘다
      // 재 호출 시 여기서 시작한다
    }
  } catch (err) {
    // try 코드 실행 시에 문제가 발생 시 해당 문제를 err 매개변수로 받아 실행한다
    console.log(err);
  }
}

let generator = what();
generator.next();
// while (!generator.done) {
//   // done 프로퍼티는 generator가 끝이 났는가 ?
//   generator.next();
//   // next메서드는  코드를 실행 한다.(단, yield에서 멈춘다.)
// }
