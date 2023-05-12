import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(request: Request, response: Response) {
    const { name, username, email } = request.body;
    const user = await this.createUserService.execute({
      name,
      username,
      email,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
