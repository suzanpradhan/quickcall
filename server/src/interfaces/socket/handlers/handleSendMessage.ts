// const handleSendMessage = (socketServer: Server, socket: Socket) => {
//   socket.on("sendMessage", (message: string) => {
//     const existingUser = getUser(socket.id);
//     if (existingUser?.currentRoomId) {
//       sockerServer?.to(existingUser.currentRoomId).emit("receiveMessage", {
//         id: socket.id,
//         name: "Alex",
//         message: message,
//       });
//     } else {
//       console.log(
//         `Socket ${socket.id} tried to send message without joining a room`
//       );
//     }
//   });
// };
