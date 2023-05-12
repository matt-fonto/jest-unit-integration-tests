// define the User Class/Entity
class User {
  // define the properties of the User Class/Entity
  id?: number; // optional
  name!: string;
  username!: string;
  email!: string;

  // the constructor is private, so it can only be called from inside the class
  // the constructor creates a new User object and assigns the properties to it
  private constructor({ name, username, email }: User) {
    return Object.assign(this, { name, username, email });
  }

  // This is a static method, so it can be called without instantiating the class
  // The static method creates a new User object and returns it
  static create({ name, username, email }: User) {
    const user = new User({ name, username, email });
    return user;
  }
}

export { User };

// 1. Create a new User object using the static method
// 2. Controller: ensures that the request body contains the required properties
// 3. The create method creates a new User object and returns it
