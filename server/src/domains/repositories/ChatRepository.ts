import { ChatMesssage } from "../entities/chat.entity";

export interface ChatRepository {
  saveMessage(message: ChatMesssage): Promise<ChatMesssage>;
}
