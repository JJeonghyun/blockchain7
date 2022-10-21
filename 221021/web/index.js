document.getElementById("menu-btn").onclick = function (e) {
  document.getElementById("user-input-container").classList.toggle("on");
};

document.getElementById("board-add").onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["board-title"].value) {
    e.target["board-title"].focus();
    return;
  }
  if (!e.target["board-text"].value) {
    e.target["board-text"].focus();
    return;
  }
  //   console.log(e.target["board-title"].value);
  //   console.log(e.target["board-text"].value);
  try {
    const data = await axios.post("/api/board/add", {
      title: e.target["board-title"].value,
      text: e.target["board-text"].value,
      uptime: Date.now(),
    });
    console.log(data.data);
    if (data.data.status == 200) {
      e.target["board-title"].value = e.target["board-text"].value = "";
    }
  } catch (err) {
    console.log(err);
  }
  getList();
  // axios로 post로 데이터를 보낸다
};
// form 안에 button은 기본적으로 form의 submit을 실행
const tempData = [
  [
    { title: "asdasd1", text: "sadasdasdasdasd" },
    { title: "asdasd2", text: "sadasdasdasdasd" },
    { title: "asdasd3", text: "sadasdasdasdasd" },
    { title: "asdasd4", text: "sadasdasdasdasd" },
    { title: "asdasd5", text: "sadasdasdasdasd" },
  ],
  [
    { title: "asdasd6", text: "sadasdasdasdasd" },
    { title: "asdasd7", text: "sadasdasdasdasd" },
  ],
];
let maxCount = 2; // 총 페이지 수
let count = 0; // 현재 페이지

// document.getElementsByClassName("title")[0].onclick = function (e) {
//   document.getElementsByClassName("text")[0].classList.toggle("hidden-text");

//   document.getElementsByTagName("img")[0].src = "./imgs/angle-down-solid.svg";

// };
const pageElem = document.getElementById("page");
const listElem = document.getElementById("list");

async function getList() {
  try {
    const data = await axios.get("/api/board?count=" + count);
    // count = 0 > /api/board?count=0
    console.log(data.data.maxCount);
    pageElem.innerHTML = "";
    maxCount = data.data.maxCount;
    for (let i = 0; i < maxCount; ++i) {
      const tempLi = document.createElement("li");
      tempLi.innerText = i + 1;
      tempLi.onclick = function (e) {
        count = i;
        pageElem.getElementsByClassName("now")[0].classList.remove("now");
        tempLi.classList.add("now");
        getList();
      };
      if (count === i) {
        tempLi.classList.add("now");
      }
      pageElem.append(tempLi);
    }

    listElem.innerHTML = "";

    data.data.list.forEach((data, index) => {
      //   tempData[count].forEach((data) => {
      const tempLi = document.createElement("li");
      const tempTitle = document.createElement("div");
      const tempText = document.createElement("div");
      const tempImg = document.createElement("img");
      const tempP = document.createElement("p");
      const tempH3 = document.createElement("h3");
      const tempTextArea = document.createElement("textarea");
      const tempBtnBox = document.createElement("div");
      const tempDelBtn = document.createElement("img");
      const tempEditBtn = document.createElement("img");
      const tempCancelBtn = document.createElement("img");

      tempTitle.classList.add("title");
      tempTitle.onclick = function (e) {
        tempText.classList.toggle("on");
        tempImg.classList.toggle("on");
        tempText.classList.remove("edit");
      };
      tempText.classList.add("text");
      tempImg.src = "./imgs/angle-up-solid.svg";
      tempImg.alt = "list-item-btn";
      tempH3.innerText = data.title;
      tempP.innerText = data.text;
      tempTextArea.value = data.text;
      tempBtnBox.classList.add("list-btn-box");

      tempDelBtn.src = "./imgs/bug-solid.svg";
      tempDelBtn.alt = "delete-btn";
      tempBtnBox.classList.add("delete");
      tempDelBtn.onclick = async function (e) {
        try {
          const data = await axios.post("/api/board/delete", {
            count,
            num: index,
          });
          getList();
        } catch (err) {
          console.log(err);
        }
      };

      tempEditBtn.src = "./imgs/dove-solid.svg";
      tempEditBtn.alt = "edit-btn";
      tempEditBtn.onclick = async function (e) {
        if (tempText.classList.contains("edit")) {
          try {
            const data = await axios.post("/api/board/update", {
              count,
              num: index,
              text: tempTextArea.value,
              uptime: Date.now(),
            });
            getList();
            console.log(data.data);
          } catch (err) {
            console.log(err);
          }
        } else {
          tempTextArea.value = data.text;
          tempText.classList.add("edit");
        }
      };
      tempCancelBtn.src = "./imgs/virus-solid.svg";
      tempCancelBtn.alt = "cancel-btn";
      tempCancelBtn.classList.add("cancel");
      tempCancelBtn.onclick = function (e) {
        tempText.classList.remove("edit");
      };

      tempBtnBox.append(tempDelBtn);
      tempBtnBox.append(tempEditBtn);
      tempBtnBox.append(tempCancelBtn);

      tempTitle.append(tempH3);
      tempTitle.append(tempImg);
      tempText.append(tempP);
      tempText.append(tempTextArea);
      tempText.append(tempBtnBox);
      tempLi.append(tempTitle);
      tempLi.append(tempText);
      listElem.append(tempLi);
    });
  } catch (err) {
    console.log(err);
  }
}
getList();

// axios.get("/api/board").then((data) => {
//   console.log(data);
// });
// axios.post("/api/board/add").then((data) => {
//   console.log(data);
// });
