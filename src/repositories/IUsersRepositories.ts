import { User } from "../entities/User";

// The interface defines the methods that the repository must implement
interface IUsersRepository {
  // The create method receives a User object and returns a Promise of a User object
  create(user: User): Promise<User>;
  // The exists method receives a username and returns a Promise of a boolean
  exists(username: string): Promise<boolean>;
}

export { IUsersRepository };
