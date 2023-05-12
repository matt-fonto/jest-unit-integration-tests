import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepositories";
import { v4 as uuid } from "uuid";

class UsersRepositoryInMemory implements IUsersRepository {
  // declare an empty array of User objects that simulates a database table
  private users: User[] = [];

  // create a function that receives the user object and adds it to the array/database
  async create(user: User): Promise<User> {
    // here, we create a new User object and assign it an id
    Object.assign(user, {
      id: uuid(),
    });

    // add the user to the array/database
    this.users.push(user);
    return user;
  }

  // identifies if a user with the same username already exists
  async exists(username: string): Promise<boolean> {
    const user = this.users.some((user) => user.username === username);
    return user;
  }
}

export { UsersRepositoryInMemory };
