import { useQuery, useMutation } from '@apollo/client';
import { DELETE_BOOK_MUTATION, GET_BOOKS, GET_AUTHORS } from '../../GraphQLQueries/Query';
import { useHistory } from 'react-router-dom';

const BookList = () => {
  const bookData = useQuery(GET_BOOKS);
  const [deleteBook, {}] = useMutation(DELETE_BOOK_MUTATION);

  let history = useHistory();

  const editHandler = (id) => {
    history.push(`/updatebook/${id}`);
  };

  const deleteHandler = (bookId) => {
    deleteBook({ variables: { id: bookId }, refetchQueries: [{ query: GET_BOOKS }, { query: GET_AUTHORS }] });
  };
  

  if (bookData.loading) return 'Loading...';
  return (
    <div>
      <h2>Book List</h2>
      <table border="1 black solid">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Genre</th>
            <th>Author</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookData.data.books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.genre}</td>
                <td>{book.author.name}</td>
                <td>
                  <button id={book.id} onClick={(event) => editHandler(event.target.id)}>
                    Upadte
                  </button>
                </td>
                <td>
                  <button id={book.id} onClick={(event) => deleteHandler(event.target.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <button
        onClick={() => {
          history.push('/addbook');
        }}
      >
        AddBook
      </button>
      <button
        onClick={() => {
          history.push('/authorlist');
        }}
      >
        AuthorList
      </button>
    </div>
  );
};

export default BookList;
