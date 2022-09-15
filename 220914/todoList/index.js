/*const checkList = [
  { type: "checkbox", name: "체크박스" },
  { type: "text", name: "할일" },
  { type: "mod", name: "수정" },
  { type: "dele", name: "삭제" },
];
const todoList = [];

function createList(checkbox, text, mod, dele) {
  todoList.push({
    checkbox,
    text,
    mod,
    dele,
  });
}

createList("", "", "mod1", "dele1");
console.log(todoList);

todoList.forEach((item)=>{

})


const headList = [
  { type: "nam", name: "체크박스" },
  { type: "age", name: "할일 목록" },
  { type: "area", name: "수정" },
  { type: "mbti", name: "삭제" },
];
const studentsList = [];

function createList(name, age, area, mbti) {
  studentsList.push({
    name,
    age,
    area,
    mbti,
  });
}

const tableHeaderElem = document.getElementById("id-header");

headList.forEach((item) => {
  tableHeaderElem.innerHTML += "<div>" + item.name + "</div>";
});
*/

// let inputText = document.getElementById("text"); // input text 창 벨류 값
// let clickAdd = document.getElementById("btn"); // 버튼 클릭 객체 접근
// let addText = document.getElementById("check-list"); // 해야 할 일 객체 추가
// let count = 0;
// clickAdd.onclick = () => {
//   let temp = `<div id="box${count}"><input  type="checkbox" /><label>${inputText.value}</label>
//   <button id="btn-mod">수정</button>
//   <button id="btn-del">삭제</button></div>`;
//   addText.innerHTML += temp;
//   inputText.value = "";
//   console.log(inputText.value);
//   console.log(addText);
//   console.log(addText.innerHTML);
//   count++;
//   console.log(count);

//   let clickRemove = document.getElementById("btn-del");
//   let checkedBox = document.getElementById(`box${count}`);

//   clickRemove.onclick = () => {
//     if (count) {
//       addText.firstElementChild.innerHTML = "";
//       addText.innerHTML;
//     }
//   };
// };

let textInput = document.getElementById("textInput");
let addButton = document.getElementById("addButton");
let tdList = document.getElementById("tdList");

addButton.addEventListener("click", function () {
  let pTag = document.createElement("p");
  pTag.innerText = textInput.value;
  pTag.classList.add = "p-tag";
  let delButton = document.createElement("button");

  tdList.appendChild(pTag);
  pTag.appendChild(delButton);
  delButton.innerText = "삭제";
  textInput.value = "";

  pTag.addEventListener("click", function () {
    pTag.style.textDecoration = "line-through";
  });

  delButton.addEventListener("click", function () {
    tdList.removeChild(pTag);
  });
});
