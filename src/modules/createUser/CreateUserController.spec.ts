/* 
@jest-environment ./prisma/prisma-environment-jest
*/

import { app } from "../../app";
import request from "supertest";

describe("Create User Controller", () => {
  it("should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      username: "integration_test",
      name: "Integration Test",
      email: "example@mail.com",
    });

    expect(response.status).toBe(200);
  });

  it("shouldn't be able to create an existing user", async () => {
    const response = await request(app).post("/users").send({
      username: "integration_test_exists",
      name: "Integration Test Existing",
      email: "exampleExists@mail.com",
    });

    expect(response.status).toBe(400);
  });
});
