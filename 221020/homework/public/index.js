const todoList = document.getElementById("list");

function getList() {
  todoList.innerHTML = "";
  axios.get("/api/list").then((resData) => {
    resData.data.list.forEach((todo, index) => {
      const tempElem = document.createElement("li");
      const deleteButon = document.createElement("button");
      const modifyButton = document.createElement("button");
      deleteButon.innerHTML = `삭제`;
      modifyButton.innerHTML = `수정`;
      tempElem.classList.add("list-group-item");
      deleteButon.classList.add("button-group-item");
      modifyButton.classList.add("modify-group-item");
      if (!deleteButon.getAttribute("id")) deleteButon.id = index;
      console.log(deleteButon.getAttribute("id"));
      deleteButon.addEventListener("click", () => {
        tempElem.remove();
        axios.delete(`/api/list/?id=${index}`);
      });
      modifyButton.addEventListener("click", () => {
        const tempModify = document.getElementsByClassName("list-group-item");
        tempModify[index].style.display = "none";
        const tempInput = document.createElement("input");
        tempInput.type = "text";
        tempInput.style.display = "block";
        tempModify[index].previousSibling.appendChild(tempInput);

        tempInput.appendChild(modifyButton);
        console.log("ddd");
      });
      tempElem.innerHTML = `${todo.text} / 등록 시간 : ${new Date(todo.time)}`;
      todoList.append(tempElem);
      tempElem.append(modifyButton);
      tempElem.append(deleteButon);
    });
  });
}

getList();

document.forms["todo-form"].onsubmit = function (e) {
  axios
    .post("/api/list", {
      name: document.forms["todo-form"]["do-name"].value,
      time: Date.now(),
    })
    .then((data) => {
      getList();
    });
};
