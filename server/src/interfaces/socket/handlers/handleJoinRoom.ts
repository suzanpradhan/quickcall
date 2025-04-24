import { GetOrCreateRoomUseCase } from "@/app/usecases/chat/GetOrCreateRoom";
import { container } from "@/core/di/container";
import { ChatRoomRepository } from "@/domains/repositories/ChatRoomRepository";
import { Server, Socket } from "socket.io";

const handleJoinRoom = (socketServer: Server, socket: Socket) => {
  socket.on("joinRoom", async (roomId: string) => {
    const chatRoomRepo =
      container.get<ChatRoomRepository>("ChatRoomRepository");
    const room = await GetOrCreateRoomUseCase(chatRoomRepo).execute(roomId);
    console.log(room);

    socket.join(room.roomId);
    console.log(socket.id + " entered " + roomId);
  });
};

export default handleJoinRoom;
