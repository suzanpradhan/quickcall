export interface ChatUserDTO {
  socketId: string;
  name?: string;
  currentRoomId?: string;
}

export interface ChatRoomDTO {
  id: string;
  name: string;
}
