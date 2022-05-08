import { gql } from '@apollo/client';

const getAuthorsQuery = gql`
  query {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  query {
    books {
      name
      id
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const loginQuery = gql`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const updateBookMutation = gql`
  mutation($id: ID!, $name: String, $genre: String, $authorId: ID) {
    updateBook(id: $id, name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

const deleteBookMutation = gql`
  mutation($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`;

const createUserMutation = gql`
  mutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      id
    }
  }
`;

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const bookAddedSubscription = gql`
  subscription {
    bookAdded {
      name
      genre
      author {
        name
      }
    }
  }
`;

const bookUpdatedSubscription = gql`
  subscription {
    bookUpdated {
      name
      genre
      author {
        name
      }
    }
  }
`;

const bookDeletedSubscription = gql`
  subscription {
    bookDeleted {
      name
      genre
      author {
        name
      }
    }
  }
`;

export {
  getAuthorsQuery,
  getBooksQuery,
  addBookMutation,
  getBookQuery,
  updateBookMutation,
  deleteBookMutation,
  bookAddedSubscription,
  bookUpdatedSubscription,
  bookDeletedSubscription,
  createUserMutation,
};
