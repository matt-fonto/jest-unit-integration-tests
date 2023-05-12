import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepositories";

class UserRepositoryMock implements IUsersRepository {
  // here we will store the users
  // private users: it is a private property, so it can only be accessed from inside the class
  // {[username: string]: boolean}: it is an object that has a string as a key and a boolean as a value
  private users: { [username: string]: boolean } = {};

  async create(user: User): Promise<User> {
    // here we will store the user
    this.users[user.username] = true;
    return user;
  }

  async exists(username: string): Promise<boolean> {
    // here we will check if the user exists
    return !!this.users[username];
  }

  setUserExists(username: string, exists: boolean) {
    this.users[username] = exists;
  }
}

export { UserRepositoryMock };
