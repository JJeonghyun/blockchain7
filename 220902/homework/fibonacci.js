let a;
function fibonacci(n) {
  console.log(`입력한  수 : ${n} `);
  let result = 1;
  for (let i = 1; i <= n; i++) {
    if (i == 1) return 1;
    else if (i == 2) return 1;
    else {
      result = fibonacci(n - 2) + fibonacci(n - 1);
    }
  }
  return result;
}

a = prompt(`숫자를 입력하세요.`);
console.log(`${a} = ${fibonacci(parseInt(a))}`);

// 기본과제
// 숫자 야구 게임
// 컴퓨터가 숫자 3개를 고른다. (세자리 숫자가 중복x)
// === > 컴퓨터가 숫자를 고른다(숫자1) -> 또 하나를 골랐다(숫자2) -> 숫자1=숫자2 다시 전단계로 가서 숫자2를 고른다
//-> 숫자1!=숫자2면 숫자3을 고른다. -> 숫자1!=숫자3 && 숫자2!=숫자3  true 면 사용자 입력, false면 숫자3을 다시 고른다

// 사람이 숫자 3개를 입력한다.
// 숫자가 같고 위치도 같으면 스트라이크
// 숫자만 같고 위치가 다르면 볼
// 같은 숫자가 없으면 볼
// 입력해서 몇번만에 3스트라이크, 즉 숫자를 몇번만에 맞추는지 하는 게임
// 123 -> 321, 1스트라이크, 2볼
// 123 -> 456, 3아웃

// draw.io
