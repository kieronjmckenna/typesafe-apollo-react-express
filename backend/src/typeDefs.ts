import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String
    age: Int!
    hairColor: String
    eyeColor: String
    height: Float!
    weight: Float
    address: String
    netWorth: Float
    favoriteFood: String!
    foo: Int
    bar: String
    isActive: Boolean
    premiumUser: Boolean
  }

  type Fruit {
    id: Int!
    name: String!
  }

  type Query {
    ReadUser(id: Int!): User
    ReadAllFruits: [Fruit]
  }

  type Mutation {
    CreateUser(
      firstName: String!
      lastName: String
      age: Int!
      hairColor: String
      eyeColor: String
      height: Float!
      weight: Float
      address: String
      netWorth: Float
      favoriteFood: String!
      foo: Int
      bar: String
      isActive: Boolean
      premiumUser: Boolean
    ): User

    UpdateUser(
      firstName: String!
      lastName: String
      age: Int!
      hairColor: String
      eyeColor: String
      height: Float!
      weight: Float
      address: String
      netWorth: Float
      favoriteFood: String!
      foo: Int
      bar: String
    ): User
  }
`;
