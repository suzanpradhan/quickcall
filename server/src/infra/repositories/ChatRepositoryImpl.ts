import { ChatMesssage } from "@/domains/entities/chat.entity";
import { ChatRepository } from "@/domains/repositories/ChatRepository";
import { WithId } from "mongodb";
import { connectMongo } from "../db/mongo/db";

export class ChatRepositoryImpl implements ChatRepository {
  async saveMessage(message: ChatMesssage): Promise<ChatMesssage> {
    const db = await connectMongo();
    const chat = await db.collection("chats").insertOne(message);
    return (await db
      .collection<WithId<ChatMesssage>>("chats")
      .findOne({ _id: chat.insertedId }))!;
  }
}
