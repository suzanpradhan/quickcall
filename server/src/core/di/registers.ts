import { ChatRoomRepoImpl } from "@/infra/repositories/ChatRoomRepoImpl";
import { UserRepositoryImpl } from "@/infra/repositories/UserRepositoryImpl";
import { container } from "./container";

container.register("UserRepository", new UserRepositoryImpl());
container.register("ChatRoomRepository", new ChatRoomRepoImpl());
