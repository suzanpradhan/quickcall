import { ChatRoom } from "@/domains/entities/chat.entity";
import { ChatRoomRepository } from "@/domains/repositories/ChatRoomRepository";

export const GetOrCreateRoomUseCase = (chatRepo: ChatRoomRepository) => {
  return {
    async execute(roomId: string): Promise<ChatRoom> {
      return await chatRepo.getOrCreate(roomId);
    },
  };
};
