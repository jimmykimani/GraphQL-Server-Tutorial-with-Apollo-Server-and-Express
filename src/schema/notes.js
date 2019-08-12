import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    notes: [Note!]
    note(id: ID!): Note!
  }

  extend type Mutation {
    createNewNote(text: String!): Note!
    deleteNote(id: ID!): Boolean!
    updateNote(id: ID!, text: String!): Note!
  }

  type Note {
    id: ID!
    text: String!
  }
`;