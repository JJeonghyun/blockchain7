const todoList = document.getElementById("list");
const buttonGroupItem = document.getElementsByClassName("button-group-item");

function getList() {
  todoList.innerHTML = "";
  axios.get("/api/list").then((resData) => {
    resData.data.list.forEach((todo) => {
      const tempElem = document.createElement("li");
      const tempButton = document.createElement("button");
      tempElem.classList.add("list-group-item");
      tempButton.classList.add("button-group-item");
      tempElem.innerHTML = `${todo.text} / 등록 시간 : ${new Date(todo.time)}`;
      tempButton.innerHTML = `삭제`;
      todoList.append(tempElem);
      tempElem.append(tempButton);
    });
  });
}

getList();
document.forms["todo-form"].onsubmit = function (e) {
  e.preventDefault(); // < 기본 이벤트를 막는다.
  axios
    .post("/api/list", {
      name: document.forms["todo-form"]["do-name"].value,
      time: Date.now(),
    })
    .then((data) => {
      getList();
    });
  // axios.post("라우터", 서버의 req.body) 저 데이터를 보낸다
  //   axios.put("/api/list", {}).then((data) => {});
  //   axios.delete("/api/list", {}).then((data) => {});
};

//   let tempDate = new Date();
//   time: tempDate.toLocaleString(),
