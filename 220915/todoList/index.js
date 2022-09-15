const list = document.getElementById("todo-list");
// const로 list를 초기화 한 이유 : 메서드를 호출할 떄마다 JavaScript는 해당 코드를 실행하기 때문에
// 실행을 최소화 하기 위해 변수에 변환값(return)을 정의하여 이후 다시 찾지 않고 바로 쓸 수 있다.

function deleteItem(num) {
  // 삭제를 위한 함수
  //   list.children[num].classList.add("delete");
  // list의 자식들(element) 중에 num번째 자식에 'delete'라는 클래쓰를 추가한다.
  // delete 클래스를 가진 element는 css 스타일로 인해 가운데 줄이 생긴다. (line-through)
  //   let startIdx = 0;
  //   let endIdx = 0;
  //   let tempHTML = list.innerHTML;
  //   for (let i = 0; i < num; i++) {
  //     startIdx = tempHTML.slice(startIdx + 4).indexOf("<li>");
  //   }
  //   console.log(startIdx);
  //   endIdx = tempHTML.slice(startIdx + 4).indexOf("<li>");
  //   console.log(endIdx);
  //   tempHTML = list.innerHTML;
  //   console.log(tempHTML);
  //   list.innerHTML = tempHTML.slice(0, startIdx) + tempHTML.slice(endIdx + 4);
  //   console.log(list.innerHTML);
  list.innerHTML = list.innerHTML.replace(list.children[num].outerHTML, "");
}

document.getElementById("todo-add").onclick = () => {
  // todo-add, 즉 추가 버튼에 클릭에 대한 코드를 정의한다.
  const input = document.getElementById("todo-input");
  // 입력된 값을 확인하기 위해 element를 찾아 변수에 초기화 한다.
  if (!input.value) return;
  // 입력된 값이 없으면 return, 즉 메서드를 종료한다.
  list.innerHTML += `<li>${input.value}<button onclick="deleteItem(${list.children.length})"></button></li>`;
  // list, 할일 목록에 li element를 추가한다.
  // element의 자식으로 버튼을 추가하여 list의 자식들의 길이(length). 현재는 추가되지 않았기 때문에 index 처럼 사용가능
  // 이에 자식들의 길이를 매개변수로 전달
  input.value = "";
  // 입력된 값을 초기화
};
