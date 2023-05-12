import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";

// The interface defines the methods that the repository must implement
interface IUserRequest {
  name: string;
  username: string;
  email: string;
}

class CreateUserService {
  // constructor receives the repository as a parameter
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, username, email }: IUserRequest) {
    // check if the user already exists
    const userAlreadyExists = await this.usersRepository.exists(username);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    // By doing this we make the code more modular and testable
    // newUser: go to my User entity and call the static method create passing the parameters
    const newUser = User.create({ name, username, email });
    // user: takes the result of the create method and passes it to our repository
    const user = await this.usersRepository.create(newUser);
    return user;
  }
}

export { CreateUserService };
