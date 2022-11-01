const socket = require("socket.io");

module.exports = (server) => {
  const io = socket(server);

  io.on("connection", (ws) => {
    ws.on("message", (data) => {
      // on으로 받는다.
      io.emit("message", data);
    });
    ws.on("end", (data) => {
      ws.broadcast.emit("end", data.id);
    });
  });
};
