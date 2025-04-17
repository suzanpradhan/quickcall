import { UserRepositoryImpl } from "server/src/infra/repositories/UserRepositoryImpl";
import { container } from "./container";

container.register("UserRepository", new UserRepositoryImpl());
