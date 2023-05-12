export default {
  clearMocks: true,
  collectCoverage: true,
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/server"],
  testEnvironment: "<rootDir>/prisma/prisma-environment-jest.js",
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "ts-jest",
  // get all the files that end with .spec.ts
  testMatch: ["**/**/*.spec.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
