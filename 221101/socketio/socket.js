const socket = require("socket.io");

module.exports = (server) => {
  const io = socket(server);

  io.on("connection", (ws) => {
    // 2. 프론트엔드 브라우저 웹사이트에서 message라는 이름으로 보낸 데이터를 받아서 처리
    ws.on("message1", () => {
      io.emit("message", ws.data);
    });
    ws.on("message", (data) => {
      ws.data = data;
      console.log(data);
      // 3. 위에서 콘솔로 확인 후에 message 라는 이름으로 프론트엔드에 데이터를 보낸다
      //   ws.emit("message", "핵밥");
      //    ws.emit()은 연결된 프론트엔드에게 보낸다
      // io.emit("message", "핵밥");
      // io.emit()은 연결된 모든 프론트엔드에게 보낸다
      ws.broadcast.emit("message", data.text);
      // 보낸 프론트엔드를 제외하고 나머지 모든 프론트엔드에 데이터를 보낸다.
    });
    ws.on("disconnect", () => {
      console.log("disconnection");
      io.emit("disconnect1", "dkdkdk");
    });
  });
};

// const socket = require("socket.io");

// module.exports = (server) => {
//   const io = socket(server);

//   io.on("connection", (ws) => {
//     // 2번, 프론트엔드(브라우저 웹 사이트)에서 message라는 이름으로 보낸 데이터를 받아서 처리한다.
//        ws.on("hi1", ()=>{
//        io.emit("message1", ws.data);
//      })
//     ws.on("hi", (data) => {
//        ws.data=data;
//       console.log(data);
//       // 3번 위에서 콘솔로 확인한 후에 message 라는 이름으로 프론트엔드에 데이터를 보낸다.
//       // ws.emit("message1", data);
//       // ws.emit은 연결된 프론트엔드에게 보낸다.
//       io.emit("message1", data);
//       // io.emit은 연결된 모든 프론트엔드에게 보낸다.

//       ws.broadcast.emit("message1", "data");
//       // 보낸 프론트엔드를 제외하고 나머지 모든 프론트엔드에 데이터를 보낸다.
//     });
//     ws.on("disconnect", () => {
//       console.log("disconnection");
//       io.emit("disconnect1", "아라라");
//     });
//   });
// };
