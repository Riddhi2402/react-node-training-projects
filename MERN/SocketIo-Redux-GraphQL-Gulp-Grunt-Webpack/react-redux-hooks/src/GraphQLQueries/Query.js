import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query {
    books {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

export const GET_BOOK = gql`
  query ($id: ID!) {
    book(id: $id) {
      name
      genre
      authorId
    }
  }
`;

export const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
      age
      books {
        id
        name
        genre
      }
    }
  }
`;

export const ADD_BOOK_MUTATION = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export const UPDATE_BOOK_MUTATION = gql`
  mutation ($id: ID!, $name: String, $genre: String, $authorId: ID) {
    updateBook(id: $id, name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export const DELETE_BOOK_MUTATION = gql`
  mutation ($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`;