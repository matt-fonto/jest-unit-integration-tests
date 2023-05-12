### Types of Test

1. Unit Test: Test a single unit of code.
   For example: testing a function, method, or class

2. Integration Test: Test multiple units of code.
   For example: testing a function that calls another function
   Routes -> Controller -> Service -> Repository -> Database
   <- Database <- Repository <- Service <- Controller <- Routes

   ***

   - Routes: where the request comes in and the response goes out
     For example: `GET /users` or `POST /users`

   - Controller: where the request is handled.
     For example:

   ```ts
   @Get('/users')
   getUsers() {
   return this.userService.getUsers();
   }

   @Post('/users')
   createUser() {
   return this.userService.createUser();
   }
   ```

   - Service: where the business logic is handled
     For example: `GET /users` or `POST /users`

   - Repository: where the data is accessed

   - Database: where the data is stored
