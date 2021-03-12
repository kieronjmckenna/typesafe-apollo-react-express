import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  age: Scalars['Int'];
  hairColor?: Maybe<Scalars['String']>;
  eyeColor?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  weight?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
  netWorth?: Maybe<Scalars['Float']>;
  favoriteFood: Scalars['String'];
  foo?: Maybe<Scalars['Int']>;
  bar?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  premiumUser?: Maybe<Scalars['Boolean']>;
};

export type Fruit = {
  __typename?: 'Fruit';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  ReadUser?: Maybe<User>;
  ReadAllFruits?: Maybe<Array<Maybe<Fruit>>>;
};


export type QueryReadUserArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateUser?: Maybe<User>;
  UpdateUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  age: Scalars['Int'];
  hairColor?: Maybe<Scalars['String']>;
  eyeColor?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  weight?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
  netWorth?: Maybe<Scalars['Float']>;
  favoriteFood: Scalars['String'];
  foo?: Maybe<Scalars['Int']>;
  bar?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  premiumUser?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateUserArgs = {
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  age: Scalars['Int'];
  hairColor?: Maybe<Scalars['String']>;
  eyeColor?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  weight?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
  netWorth?: Maybe<Scalars['Float']>;
  favoriteFood: Scalars['String'];
  foo?: Maybe<Scalars['Int']>;
  bar?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type CreateUserMutationVariables = Exact<{
  firstName: Scalars['String'];
  age: Scalars['Int'];
  height: Scalars['Float'];
  favoriteFood: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { CreateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'eyeColor' | 'favoriteFood' | 'address'>
  )> }
);


export const CreateUserDocument = gql`
    mutation CreateUser($firstName: String!, $age: Int!, $height: Float!, $favoriteFood: String!) {
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
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      age: // value for 'age'
 *      height: // value for 'height'
 *      favoriteFood: // value for 'favoriteFood'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;