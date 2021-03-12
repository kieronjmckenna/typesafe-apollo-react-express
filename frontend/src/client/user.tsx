import { gql } from "@apollo/client";

export const CreateUserMutation = gql`
  mutation CreateUser(
    $firstName: String!
    $age: Int!
    $height: Float!
    $favoriteFood: String!
  ) {
    CreateUser(
      firstName: $firstName
      age: $age
      height: $height
      favoriteFood: $favoriteFood
    ) {
      eyeColor
      favoriteFood
      address
    }
  }
`;
