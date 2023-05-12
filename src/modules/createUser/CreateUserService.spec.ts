import { IUsersRepository } from "../../repositories/IUsersRepositories";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserService } from "./CreateUserService";
import { UserRepositoryMock } from "./__mocks__/UsersRepository";

// here we will test all the create user functionalities
describe("Create User", () => {
  let usersRepository: IUsersRepository;
  let createUserService: CreateUserService;

  beforeAll(() => {
    // given that we have a user repository and a service
    usersRepository = new UsersRepositoryInMemory();
    createUserService = new CreateUserService(usersRepository);
  });

  it("should be able to create a new user", async () => {
    // when we create a new user
    const userData = {
      name: "John Doe",
      email: "john@mail.com",
      username: "johndoe",
    };

    const user = await createUserService.execute(userData);

    // then we should have a new user with an auto generated id
    expect(user).toHaveProperty("id");
  });

  it("shouldn't be able to create an existing user", async () => {
    // when we create a new user
    const userData = {
      name: "John Doe Exists",
      email: "john@mailexists.com",
      username: "johndoe",
    };

    // mock
    // const usersRepositoryMock = new UserRepositoryMock();
    // usersRepositoryMock.setUserExists(userData.username, true);

    // createUserService = new CreateUserService(usersRepositoryMock);
    createUserService = new CreateUserService(usersRepository);
    // await createUserService.execute(userData);

    await expect(createUserService.execute(userData)).rejects.toThrow(
      "User already exists"
    );
  });
});
