import { PrismaClient } from "@prisma/client";
import { Resolvers } from "./generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    ReadAllFruits: async (_, args, __) => {
      const prisma = new PrismaClient();

      // NEEDS TO RETURN LIST OF FRUITS

      const fruits = await prisma.fruit.findMany();

      return fruits;

      // const users = await prisma.user.findMany()

      // return users
    },
  },

  Mutation: {
    CreateUser: async (_, args, __) => {
      const prisma = new PrismaClient();

      const user = await prisma.user.create({ data: args });

      return user;
    },
  },
};
