const { gql } = require('apollo-server-express');

module.exports = gql`
  type Book {
    id: ID
    name: String
    genre: String
    authorId: ID
    author: Author
  }

  type Author {
    id: ID
    name: String
    age: Int
    books: [Book]
  }

  type User {
    id: ID
    email: String
    password: String
  }

  type AuthData {
    userId: ID
    token: String
    tokenExpiration: Int
  }

  type Query {
    books: [Book]
    authors: [Author]
    book(id: ID): Book
    author(id: ID): Author
    login(email: String!, password: String!): AuthData!
  }

  type Mutation {
    addBook(name: String!, genre: String!, authorId: ID!): Book
    updateBook(id: ID!, name: String, genre: String, authorId: ID): Book
    deleteBook(id: ID!): Book
    createUser(email: String!, password: String!): User
  }

  type Subscription {
    bookAdded: Book
    bookUpdated: Book
    bookDeleted: Book
  }
`;
