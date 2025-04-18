import { hashPassword } from "@/core/utils/hash";
import { User } from "@/domains/entities/user.entity";
import { UserRepository } from "@/domains/repositories/UserRepository";
import { RegisterDTO } from "@/interfaces/http/dtos/auth";

export const RegisterUseCase = (userRepo: UserRepository) => {
  return {
    async execute(dto: RegisterDTO) {
      const hashedPassword = await hashPassword(dto.password);

      const user = new User({
        email: dto.email,
        firstName: dto.email,
        lastName: dto.lastName,
        password: hashedPassword,
      });

      const createdUser = await userRepo.create(user);
      return createdUser.toUserDTO();
    },
  };
};
