import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID
    username: String!
    email: String!
    token: String!
    languages: [String]
    bio: String
    interests: [String]
    contibutions: [ID]
    likes: [ID]
    followers: [ID]
    views: [ID]
    scripts: [ID]
    follows: [ID]
  }

  type Query {
    getUserProfile(id: ID!): User
    getUserScripts(userId: ID!): [Script!]!

  }

  type Mutation {
    register(username: String!, password: String!, email: String): User
    login(username: String!, password: String!): User
  }
`;
