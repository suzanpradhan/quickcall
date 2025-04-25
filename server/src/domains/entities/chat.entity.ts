export interface ChatUser {
  id: string;
  name: string;
  currentRoomId: string;
}

export interface ChatRoom {
  roomId: string;
}

export interface ChatMesssage {
  roomId: string;
  fromId: string;
  toId: string;
  message: string;
}
