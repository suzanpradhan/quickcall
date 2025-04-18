import { UserRepositoryImpl } from "@/infra/repositories/UserRepositoryImpl";
import { container } from "./container";

container.register("UserRepository", new UserRepositoryImpl());
