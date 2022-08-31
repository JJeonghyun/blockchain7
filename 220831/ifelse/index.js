console.log("이것은 개발자 도구 컨솔창에 로그를 남기는 것이다.");
console.log("fabicon 어쩌구 저쩌구 경고 메세지는 지금은 무시해도 된다.");

console.log('1 === "1" : ' + (1 === "1"));

// 조건문, if && else if && else
if (1 > 2) {
  // 만약에 () 괄호 안이 참이면 {} 안의 코드를 실행한다.
  console.log("1 < 2 는 true 다");
} else {
  // if의 () 괄호 안에 있는 조건이 거짓이면 {} 안의 코드를 실행 한다.
  console.log("1 > 2 는 false 다");
}

if (1 > 2) console.log("1 < 2 는 true 다");
// if에서 조건이 참이여서 해당 코드가 실행 되면 else if, else 등 아래의 코드를 건너뛴다.
// 즉, 아래 코드는 실행하지 않는다.
else console.log("1 > 2 는 false 다");
// 위의 if, else if의 조건이 모두 충족되지 않았을 때 최후의 보루로 실행되는 코드이다.
// 한줄의 코드면 {} 가 없어도 된다.

//if (1 > 2) console.log("1 < 2 는 true 다");
//console.log('asdf');
//else console.log("1 > 2 는 false 다");
// if와 elseif, else는 함께 다녀야 한다.

// elseif 는 else 와 if 가 합쳐진 것
if (1 < 2) {
  console.log("여기 조건이 거짓이면서");
} else if (2 > 3) {
  console.log("여기 조건이 참이면 else if의 {} 코드가 실행 된다.");
} else {
  console.log("위의 if, else if의 모든 조건이 거짓일 때 실행 된다.");
}

console.log(1 < 2 ? "이건 참이야" : "이건 거짓이야");
// 조건 ? 참일 때 : 거짓일 때
// 삼항 연산자

let test1 = 10;
let test2 = 7;

if (test1 < test2) {
  console.log("꼴은 좀 보자");
} else {
  console.log("꼴도 보기 싫다");
}

let inputData;
// const inputData = prompt("넣고 싶은 값을 입력하세요.");
// prompt로 받는 내용은 string 처리
// prompt로 숫자 자료형을 받고 싶다면 prompt앞에 number를 써서 형변환을 해야한다.
// 혹은 +*** || parseInt(***) || parseFloat(***)
// 우리의 적 NaN
// switch는 여러 조건을 한번에 확인 한다.
switch (inputData) {
  // switch의 () 안에 있는 변수의 값을 확인 한다.
  case "1":
    // case는 () 안에 있는 변수의 값이 같은지 확인한다.
    console.log("1을 넣었어. ");
    break;
  // break는 해당 명령어가 있는 지점에서 코드를 정지한다.
  // 반복문에서 다시 언급할 예정, 더 확실하게 알 수 있다.
  case "2":
    console.log("2을 넣었어. ");
    break;
  case "3":
    console.log("3을 넣었어. ");
    break;
  case "4":
    console.log("4을 넣었어. ");
    break;
  default:
    // if else에서 else 와 같은 놈이다. 즉, case 에서 걸리지 않으면
    // 실행되는 마지막 보류 이다.
    console.log("1~4만 넣어줘");
}
