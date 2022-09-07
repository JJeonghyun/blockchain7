// 기존의 odd, even 클릭과 달리 oddeven에서 호출받으면
// 전달받은 매개변수를 사용하기 위해 count를 매개변수로
// 선언한다. 괄호 안의 count << '123'
function odd(count) {
  // odd 클릭 시 count는 입력된 값이 없기 때문에
  // undefined이 된다
  // oddeven함수에서 호출 받았을 시 에는 count에 oddeven
  // 함수에서 전달한 매개변수가 count에 정의된다.
  // << '123' -> true
  if (!count) count = prompt(`몇까지 찍을래 ?`);
  // undefined는 boolean 값으로 false가 되기에 매개변수가 없는지 확인
  // 하여 입력 받을 수 있도록 처리한다.
  count = parseInt(count);
  // oddeven 함수에서 전달받은 count는 문자열(string) 이기 때문에
  // parseInt함수를 호출하여 정수로 변환해준다.
  for (let i = 0; i <= count; i++) {
    // console.log("i : " + i);
    if (i % 2) console.log(i);
    // i % 2 << 홀수 일 때 1 이다. 따라서 홀수를 판단할 수 있다.
    // console.log("끝");
  }
  // 위 코드는 아래 코드들보다 안좋다.
  // 위 코드는 예를 들어 10을 넣었을 시 10번을 반복하는 반면에
  // 아래 코드들은 같은 10을 넣었을 때 5번만 반복한다.
  // 반복의 횟수차이가 입력된 수에 대해서 기하급수적으로 늘어 날 수 있다.

  for (let i = 0; i < count / 2; i++) {
    // console.log("i : " + i);
    console.log(i * 2 + 1);
    // console.log("끝");
  }

  for (let i = 1; i < count + 1; i += 2) {
    // console.log("i : " + i);
    console.log(i);
    // console.log("끝");
  }
}

const even = function (count) {
  if (!count) count = prompt(`몇까지 찍을래 ?`);
  count = parseInt(count);

  for (let i = 0; i <= count; i++) {
    if (!(i % 2)) console.log(i);
    // i % 2 << 짝수 일 때 0 -> false기 떄문에 부정을 해준다.
  }
  for (let i = 0; i < (count + 1) / 2; i++) {
    console.log(i * 2);
  }
  for (let i = 0; i < count + 1; i += 2) {
    console.log(i);
  }
};

const oddeven = () => {
  const count = prompt(`몇까지 찍을래 ? 
  그리고 홀수/짝수인지 ?\n형식은 n&홀짝`);
  // '123&홀' 형식에 맞는 문자열(string) 받게 된다.
  // split 메서드를 호출해서 &를 기준으로 분리한다.
  // 문자열(string) 아이템을 가진 배열을 반환(리턴) 받는다
  // count.split("&");
  // ->['123','홀'];

  const number = count.split("&")[0];
  const isOdd = count.split("&")[1];
  // 숫자와 홀짝이 나누어졌다.

  if (isOdd == "홀") {
    // isOdd가 홀 인지 확인하여 홀이면 odd함수를 호출
    // 함수를 호출하면서 받았던 숫자(number)를 매개변수로 전달.
    odd(number);
  } else {
    even(number);
  }
};
