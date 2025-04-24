import { ChatRoom } from "../entities/chat.entity";

export interface ChatRoomRepository {
  getRoom(roomId: string): Promise<ChatRoom | null>;
  getOrCreate(roomId: string): Promise<ChatRoom>;
}
