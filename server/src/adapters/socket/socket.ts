import { ChatUserDTO } from "@/interfaces/socket/dtos/chat_user";
import handleJoinRoom from "@/interfaces/socket/handlers/handleJoinRoom";
import http from "http";
import { Server, Socket } from "socket.io";

let sockerServer: Server | null = null;

const rooms = ["testRoom", "testRoom2"] as string[];

const users = new Map<string, ChatUserDTO>();

function addOrUpdateUser(user: ChatUserDTO) {
  const existing = users.get(user.socketId);
  if (existing) {
    existing.currentRoomId = user.currentRoomId;
    if (user.name) existing.name = user.name;
  } else {
    users.set(user.socketId, user);
  }
}

function getUser(socketId: string) {
  return users.get(socketId);
}

function removeUser(socketId: string) {
  users.delete(socketId);
}

export const initSocket = (server: http.Server) => {
  sockerServer = new Server(server, {
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false,
    cors: {
      origin: "*",
    },
  });

  sockerServer.on("connection", (socket: Socket) => {
    if (sockerServer) {
      handleJoinRoom(sockerServer, socket);
    }

    // socket.on("joinRoom", (roomId) => {
    //   if (!rooms.includes(roomId)) {
    //     console.log("Room " + roomId + " does not exist. Creating it.");
    //     return;
    //   }

    //   addOrUpdateUser({
    //     socketId: socket.id,
    //     name: "Alex",
    //     currentRoomId: roomId,
    //   });

    //   const existingUser = getUser(socket.id);
    //   if (
    //     existingUser?.currentRoomId &&
    //     existingUser.currentRoomId !== roomId
    //   ) {
    //     socket.leave(existingUser.currentRoomId);
    //   }

    //   socket.join(roomId);
    //   console.log(socket.id + " entered " + roomId);
    // });

    // socket.on("disconnect", () => {
    //   removeUser(socket.id);
    //   console.log(`Socket ${socket.id} disconnected`);
    // });

    // socket.on("sendMessage", (message) => {
    //   const existingUser = getUser(socket.id);
    //   if (existingUser?.currentRoomId) {
    //     sockerServer?.to(existingUser.currentRoomId).emit("receiveMessage", {
    //       id: socket.id,
    //       name: "Alex",
    //       message: message,
    //     });
    //   } else {
    //     console.log(
    //       `Socket ${socket.id} tried to send message without joining a room`
    //     );
    //   }
    // });
  });
};
