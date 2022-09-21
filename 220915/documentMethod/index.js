const root = document.getElementById("root");
// id가 root인 element를 가져온다. 그리고 root 변수에 초기화 한다.

// root.onload
// onload라는 메서드는 load가 되었는가 ? 되었을 때 실행 된다. 즉, DOM에 생성 됐을 때
root.onwheel = (e) => {
  // 마우스 휠에 대한 메서드
  console.log(e.target);
};
document.getElementById("name").onchange = (e) => {
  // 입력이 완료 됐을 때. 즉, 변화가 완료 됐을 때
  console.log(e.target.value);
  // e.target은 해당 메서드가 어디서 실행 됐는지 focus가 기준이 될 수도 있고 마우스의 위치가 기준이 될 수도 있다.
};
document.getElementById("name").oninput = (e) => {
  // 입력 했을 때
  console.log(e);
};
// on 어쩌구 하는 메서드를 쓰는데 그게 뭐냐 ?
// on*** 전부 이벤트 함수라고 부른다.
// 즉, 클릭, 키다운, 입력 등에 대해서 사용자의 입력에 대해서 이벤트가 발생했을 때 실행된다.

document.getElementById("name").addEventListener("click", (e) => {
  console.log(e.target);
});
for (let i = 0; i < 10; i++) {
  const tempElem = document.createElement("div");
  // div element를 생성해서 tempElem 변수에 초기화 한다.
  tempElem.innerHTML = i + "번 째 div";
  // tempElem의 내용(innerHTML)을 'i번째 div' 라고 정의한다.

  //   root.append(tempElem);
  // root element에 tempElem element를 마지막 자식으로 추가한다. (뒤에서)
  root.prepend(tempElem);
  // root element에 tempElem element를 첫번째 자식으로 추가한다. (앞에서)
}

document.getElementById("name").style.backgroundColor = "lightgray";
// html 문서에서 style 속성을 이용해서 inline 형식으로 설정된 스타일과 마찬가지로 적용된다.
console.log(document.getElementById("name").style.border);

let bodyId = document.getElementById("bodyId");
let body = document.getElementsByTagName("body");
window.onresize = () => {
  let tempWidth = window.innerWidth;
  let tempHeight = window.innerHeight;
  console.log("현재 보여지는 윈도우 창 너비 : " + tempWidth);
  console.log("현재 보여지는 윈도우 창 높이 : " + tempHeight);
};
// body.addEventListener("resize", function () {
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
//onresize()
//innerWidth, innerHeight ==> 현재 보이는 웹 브라우저 페이지
//outerWidth, outerHeight ==> 웹 브라우저 창 자체의 크기
// });
