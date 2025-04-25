import { ChatRoom } from "@/domains/entities/chat.entity";
import { ChatRoomRepository } from "@/domains/repositories/ChatRoomRepository";
import { WithId } from "mongodb";
import { connectMongo } from "../db/mongo/db";

export class ChatRoomRepoImpl implements ChatRoomRepository {
  async getRoom(roomId: string): Promise<ChatRoom | null> {
    const db = await connectMongo();
    const room = await db
      .collection<WithId<ChatRoom>>("rooms")
      .findOne({ roomId: roomId });
    return room;
  }

  async getOrCreate(roomId: string): Promise<ChatRoom> {
    const existingRoom = await this.getRoom(roomId);
    if (existingRoom) return existingRoom;
    const db = await connectMongo();
    const newRoom = await db.collection("rooms").insertOne({ roomId: roomId });
    return (await db
      .collection<WithId<ChatRoom>>("rooms")
      .findOne({ _id: newRoom.insertedId }))!;
  }
}
