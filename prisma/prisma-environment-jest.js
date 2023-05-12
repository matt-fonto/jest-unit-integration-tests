const NodeEnvironment = require("jest-environment-node");
const { v4: uuidv4 } = require("uuid");
const { execSync } = require("child_process");
const { resolve } = require("path");

const prismaCli = "./node_modules/.bin/prisma";

require("dotenv").config({ path: resolve(__dirname, "..", ".env.test") });

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.schema = `test_${uuidv4()}`;
    console.log(`Test schema: ${this.schema}`);
    this.connectionString = `${process.env.DATABASE_URL}${this.schema}`;
  }

  setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    // run the migrations to ensure our schema has the required structure
    execSync(`${prismaCli} migrate dev`);
  }

  async teardown() {
    // clean up the schema after the tests have completed
    execSync(`${prismaCli} migrate reset --force`);
  }
}

module.exports = CustomEnvironment;
