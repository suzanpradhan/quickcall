import { UserRepository } from "@/domains/repositories/UserRepository";
import { LoginDTO } from "@/interfaces/http/dtos/auth";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export const LoginUseCase = (userRepo: UserRepository) => {
  return {
    async execute(dto: LoginDTO) {
      const user = await userRepo.getUserByEmail(dto.email);
      if (!user) {
        throw new Error("User not found");
      }
      if (!compare(dto.password, user.password)) {
        throw new Error("Invalid password");
      }

      const token = sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
      );
      return { token, user };
    },
  };
};
