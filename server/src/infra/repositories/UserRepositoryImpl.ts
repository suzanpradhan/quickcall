import { User } from "@/domains/entities/user.entity";
import { UserRepository } from "@/domains/repositories/UserRepository";
import { db } from "@/infra/db/drizzle/db";
import { userTable } from "@/infra/db/drizzle/schema";
import { eq } from "drizzle-orm";

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

  async getUserByEmail(email: string): Promise<User | null> {
    const [user] = await db
      .select()
      .from(userTable)
      .where(eq(userTable.email, email))
      .limit(1);

    return new User({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });
  }
}
