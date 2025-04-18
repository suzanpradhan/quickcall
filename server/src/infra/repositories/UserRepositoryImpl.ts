import { db } from "@/core/drizzle/db";
import { userTable } from "@/core/drizzle/schema";
import { User } from "@/domains/entities/user.entity";
import { UserRepository } from "@/domains/repositories/UserRepository";

export class UserRepositoryImpl implements UserRepository {
  async create(user: User): Promise<User> {
    const [created] = await db
      .insert(userTable)
      .values({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      })
      .returning();

    return new User({
      id: created.id,
      firstName: created.firstName,
      lastName: created.lastName,
      email: created.email,
      password: created.password,
    });
  }
}
