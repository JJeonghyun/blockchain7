const infoElem = document.getElementById("info-box-container");
const infoId = document.getElementById("info-id");
const infoPw = document.getElementById("info-pw");
const signInButton = document.getElementById("sign-in-button");
const signUpButton = document.getElementById("sign-up-button");
const userName = document.getElementById("user-name");
const userGender = document.getElementById("user-gender");
const userAge = document.getElementById("user-age");
const signUpBox = document.getElementById("sign-up-box");

let controlNum = 0;
let userIdIdx = 0;
let boardTime = 0;
let loginIdx = 0;
let commentIdx = 0;

document.getElementById("menu-btn").onclick = function (e) {
  document.getElementById("user-input-container").classList.toggle("on");
};

function userInfo() {
  const data = axios
    .get("/api/user?loginIdx=" + loginIdx)
    .then((data) => {
      data.data.list.forEach((data, index) => {
        if (data.id === infoId.value) {
          loginIdx = index;
          const tempDiv = document.createElement("div");
          const tempSignOutButton = document.createElement("button");

          tempSignOutButton.innerHTML = "로그아웃";
          tempSignOutButton.classList.add("sign-out-button");
          tempDiv.classList.add("button-box");

          signInButton.remove();
          // signUpButton.before(tempSignOutButton);

          tempDiv.innerHTML = `${data.id} 님 어서오세용~! `;

          infoId.value = infoPw.value = "";
          document.getElementById("board-add").before(tempDiv);
          tempDiv.after(tempSignOutButton);
          controlNum = 1;

          tempSignOutButton.onclick = function (e) {
            tempSignOutButton.remove();
            signUpButton.before(signInButton);
            controlNum = 0;
            document.getElementById("board-add").style.display = "none";
            infoElem.style.display = "block";
            infoId.value = infoPw.value = "";
            tempDiv.innerHTML = "";
          };
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

signInButton.onclick = async function (e) {
  if (!infoId.value) {
    infoId.focus();
    return;
  }
  if (!infoPw.value) {
    infoPw.focus();
    return;
  }

  try {
    const data = await axios.post("/api/user/info", {
      id: infoId.value,
      pw: infoPw.value,
    });

    if (data.data.data === "로그인 완료") {
      document.getElementById("board-add").style.display = "block";
      infoElem.style.display = "none";

      userInfo();
    } else {
      console.log("잘못된 회원 정보입니다.");
      infoId.value = infoPw.value = "";
      return;
    }
  } catch (err) {
    console.log(err);
  }
};
signUpButton.onclick = function (e) {
  if (controlNum) return;

  infoId.value =
    infoPw.value =
    userName.value =
    userAge.value =
    userGender.value =
      "";

  signUpBox.style.display = "block";
  signInButton.style.display = "none";
  signUpButton.style.display = "none";
  const tempCheckutton = document.createElement("button");
  const tempCancelButton = document.createElement("button");
  tempCheckutton.innerHTML = "확인";
  tempCancelButton.innerHTML = "취소";
  signUpBox.after(tempCheckutton);
  tempCheckutton.after(tempCancelButton);

  tempCancelButton.onclick = () => {
    signInButton.style.display = "block";
    signUpButton.style.display = "block";
    signUpBox.style.display = "none";
    tempCheckutton.remove();
    tempCancelButton.remove();
  };

  tempCheckutton.onclick = async function () {
    if (!infoId.value) {
      infoId.focus();
      return;
    }
    if (!infoPw.value) {
      infoPw.focus();
      return;
    }
    if (!userName.value) {
      userName.focus();
      return;
    }
    if (!userAge.value) {
      userAge.focus();
      return;
    }
    if (!userGender.value) {
      userGender.focus();
      return;
    }
    const data = await axios.post("/api/user/add", {
      id: infoId.value,
      pw: infoPw.value,
      name: userName.value,
      gender: userGender.value,
      age: userAge.value,
    });
    if (data.data.checked === true) {
      console.log(data.data.id + "는 이미 등록된 회원입니다.");
    } else {
      console.log(data.data.id + "님 회원가입 성공 !");
      console.log(data.data.list);

      signUpBox.style.display = "none";
      signInButton.style.display = "block";
      signUpButton.style.display = "block";
      tempCheckutton.remove();
      tempCancelButton.remove();
    }
    infoId.value =
      infoPw.value =
      userName.value =
      userAge.value =
      userGender.value =
        "";
  };
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
  try {
    const userIdx = await axios.post("/api/user/info");
    let idx = userIdx.data.index;
    const data = await axios.post("/api/board/add", {
      title: e.target["board-title"].value,
      text: e.target["board-text"].value,
      uptime: new Date().toLocaleString(),
      index: idx,
    });

    if (data.data.status == 200) {
      e.target["board-title"].value = e.target["board-text"].value = "";
    }
  } catch (err) {
    console.log(err);
  }
  getList();
};

let maxCount = 2; // 총 페이지 수
let count = 0; // 현재 페이지
// };
const pageElem = document.getElementById("page");
const listElem = document.getElementById("list");

async function uploadUser(userId) {
  try {
    const data = await axios.post("/api/user/add");
    data.data.list.forEach((elem, index) => {
      if (elem.id === userId) {
        userIdIdx = index;
      }
    });
    return data.data.list[userIdIdx].id;
  } catch (err) {
    console.log(err);
  }
}

async function getList() {
  try {
    const data = await axios.get("/api/board?count=" + count);
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

    data.data.list.forEach(async (data, index) => {
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
      const tempCommentBox = document.createElement("div");
      const tempCommentText = document.createElement("input");
      const tempCommentBtn = document.createElement("button");

      tempLi.classList.add("list-inner-li");

      tempTitle.classList.add("title");
      tempTitle.onclick = function (e) {
        tempText.classList.toggle("on");
        tempImg.classList.toggle("on");
        tempText.classList.remove("edit");
      };

      tempText.classList.add("text");
      tempImg.src = "./imgs/angle-up-solid.svg";
      tempImg.alt = "list-item-btn";

      tempH3.innerText =
        "제목 : " +
        data.title +
        " " +
        (await uploadUser(infoId.value)) +
        " 님 작성 " +
        data.uptime;

      tempP.innerText = data.text;
      tempTextArea.value = data.text;
      tempBtnBox.classList.add("list-btn-box");

      tempDelBtn.src = "./imgs/bug-solid.svg";
      tempDelBtn.alt = "delete-btn";
      tempDelBtn.classList.add("delete");
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

      tempBtnBox.append(tempEditBtn);
      tempBtnBox.append(tempDelBtn);

      tempBtnBox.append(tempCancelBtn);

      tempTitle.append(tempH3);
      tempTitle.append(tempImg);
      tempText.append(tempP);
      tempText.append(tempTextArea);
      tempText.append(tempBtnBox);
      tempLi.append(tempTitle);
      tempLi.append(tempText);
      listElem.append(tempLi);

      tempCommentBox.innerText = "댓글 : ";
      tempCommentBtn.innerHTML = "댓글 추가";
      tempCommentBox.setAttribute("class", "comment-box");
      tempCommentBtn.classList.add("comment-btn");
      tempCommentText.setAttribute("type", "text");
      tempCommentText.setAttribute("class", "comment");
      tempCommentBox.append(tempCommentText);
      tempCommentText.after(tempCommentBtn);

      [...document.getElementsByClassName("list-inner-li")].forEach((elem) => {
        elem.after(tempCommentBox);
      });

      tempCommentBtn.onclick = async function (e) {
        try {
          console.log("여기는 댓글추가야");
          const tempCommentBox2 = document.createElement("div");
          const tempCommentCancelBtn = document.createElement("button");
          const tempCommentEditBtn = document.createElement("button");

          tempCommentCancelBtn.innerHTML = "댓글 삭제";
          tempCommentEditBtn.innerHTML = "댓글 수정";
          tempCommentBox2.innerHTML =
            (await uploadUser(infoId.value)) + " : " + tempCommentText.value;

          tempCommentBox2.append(tempCommentEditBtn);
          tempCommentEditBtn.after(tempCommentCancelBtn);
          tempCommentBox.before(tempCommentBox2);
          tempCommentText.value = "";

          tempCommentCancelBtn.onclick = () => {
            tempCommentBox2.style.display = "none";
          };
          tempCommentEditBtn.onclick = function (e) {
            const tempModifyBtn = document.createElement("button");
            const tempModifyCancelBtn = document.createElement("button");
            const tempModifyText = document.createElement("input");

            tempModifyBtn.innerHTML = "확인";
            tempModifyCancelBtn.innerHTML = "취소";
            tempModifyText.setAttribute("type", "text");

            tempCommentCancelBtn.style.display = "none";
            tempCommentEditBtn.style.display = "none";
            tempCommentBox2.innerHTML = "";

            tempCommentBox2.append(tempModifyText);
            tempModifyText.after(tempModifyBtn);
            tempModifyBtn.after(tempModifyCancelBtn);

            tempModifyBtn.onclick = async function () {
              tempCommentText.innerHTML = tempModifyText.value;
              tempModifyBtn.style.display = "none";
              tempModifyCancelBtn.style.display = "none";
              tempCommentCancelBtn.style.display = "block";
              tempCommentEditBtn.style.display = "block";
              tempCommentBox2.innerHTML =
                (await uploadUser(infoId.value)) + " : " + tempModifyText.value;
              tempCommentBox2.append(tempCommentEditBtn);
              tempCommentEditBtn.after(tempCommentCancelBtn);
            };
          };
        } catch (err) {
          console.log(err);
        }
      };
    });
  } catch (err) {
    console.log(err);
  }
}
getList();
