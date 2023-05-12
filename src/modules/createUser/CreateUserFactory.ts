import { UsersRepositoryPrisma } from "../../repositories/prisma/UsersRepositoryPrisma";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

export const createUserFactory = () => {
  // call the prisma data acces layer
  const userRepository = new UsersRepositoryPrisma();
  // take the prisma repository and pass it to the service
  const createUser = new CreateUserService(userRepository);
  // take the service and pass it to the controller
  const createUserController = new CreateUserController(createUser);
  return createUserController;
};
