import { gql } from '@apollo/client';

//Get All Books Query
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

//Get Book by Id Query
export const GET_BOOK = gql`
  query($id: ID!) {
    book(id: $id) {
      name
      genre
      authorId
    }
  }
`;

//Get All Authors Query
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

//Add Book Mutation
export const ADD_BOOK_MUTATION = gql`
  mutation($id: ID!, $name: String!, $genre: String!, $authorId: ID!) {
    addBook(id: $id, name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
      authorId
    }
  }
`;

//Update Book Mutation
export const UPDATE_BOOK_MUTATION = gql`
  mutation($id: ID!, $name: String, $genre: String, $authorId: ID) {
    updateBook(id: $id, name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
      authorId
    }
  }
`;

//Delete Book Mutation
export const DELETE_BOOK_MUTATION = gql`
  mutation($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`;
