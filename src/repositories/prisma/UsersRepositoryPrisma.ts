import { prisma } from "../../database/client";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepositories";

class UsersRepositoryPrisma implements IUsersRepository {
  // first check if the user already exists in the database
  async exists(username: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    return !!user;
  }

  // if the user does not exist, create a new user
  async create({ username, name, email }: User): Promise<User> {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        name,
      },
    });

    return newUser;
  }
}

export { UsersRepositoryPrisma };
