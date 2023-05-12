import { PrismaClient } from "@prisma/client";

// initialize prisma client, which will be used to connect to the database
// Prisma Client: it is an auto-generated and type-safe query builder that's tailored to your database schema
const prisma = new PrismaClient();

export { prisma };
