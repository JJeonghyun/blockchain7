const inputChat = document.getElementById("chat-text");
const inputId = document.getElementById("user-id");
const loginBtn = document.getElementById("login-btn");
const loginBox = document.getElementById("login-box-container");
const sendBtn = document.getElementById("send-chat");
const chatBox = document.getElementById("chat-box-container");
const chatText = document.getElementById("chat-text-container");
const createDiv = document.createElement("div");
const createLogoutBtn = document.createElement("button");

let userId = "";

function socket() {
  const socket = io();

  loginBtn.onclick = () => {
    if (!inputId.value) return;
    createDiv.innerHTML = "";
    chatText.innerHTML = "";

    inputId.style.display = "none";
    loginBtn.style.display = "none";
    chatBox.style.display = "block";

    createLogoutBtn.innerText = "로그아웃";
    userId = inputId.value;
    createDiv.innerHTML = inputId.value + "님 환영합니다.";

    loginBox.append(createDiv);
    createDiv.append(createLogoutBtn);

    createLogoutBtn.style.display = "inline-block";

    socket.on("message", (data) => {
      const tempElem = document.createElement("div");
      tempElem.innerHTML = data.id + " : " + data.text;
      chatText.append(tempElem);
      console.log(tempElem);
    });
    sendBtn.onclick = () => {
      if (!inputChat.value) return;
      inputChat.innerHTML = "";
      socket.emit("message", {
        text: inputChat.value,
        id: inputId.value,
      });
      // emit으로 보낸다
      inputChat.value = "";
    };
  };

  socket.on("end", (data) => {
    const tempEndElem = document.createElement("div");
    tempEndElem.innerText = data + "님이 나갔음요";
    chatText.append(tempEndElem);
  });

  createLogoutBtn.onclick = () => {
    createLogoutBtn.style.display = "none";
    chatBox.style.display = "none";
    inputId.style.display = "inline-block";
    loginBtn.style.display = "inline-block";

    createDiv.innerHTML = "";
    chatText.innerHTML = "";
    inputId.value = "";
    socket.emit("end", {
      id: userId,
    });
  };
}

socket();
