import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, UPDATE_BOOK_MUTATION, GET_BOOK, GET_BOOKS } from '../../GraphQLQueries/Query';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const UpdateBook = () => {
  const params = useParams();
  let history = useHistory();

  const bookData = useQuery(GET_BOOK, { variables: { id: params.id } });
  const authorData = useQuery(GET_AUTHORS);

  const [book, setBook] = useState({});

  const [updateBook, {}] = useMutation(UPDATE_BOOK_MUTATION);

  useEffect(() => {
    if (bookData.data) {
      setBook(bookData.data.book);
    }
    return () => {};
  }, [bookData]);

  const changeHandler = (event) => {
    const newBook = { ...book };
    newBook[event.target.name] = event.target.value;
    setBook(newBook);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    updateBook({
      variables: { id: params.id, name: book.name, genre: book.genre, authorId: book.authorId },
      refetchQueries: [{ query: GET_BOOKS }, { query: GET_AUTHORS }],
    });
    history.push('/booklist');
  };

  if (authorData.loading) return 'Loading...';
  return (
    <div>
      <h2>Update Book Form</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Book Name:</label>
          <input type="text" name="name" onChange={changeHandler}></input>
        </div>
        <br />
        <div>
          <label>Genre:</label>
          <input type="text" name="genre" onChange={changeHandler}></input>
        </div>
        <br />
        <div>
          <label>Author:</label>
          <select name="authorId" onChange={changeHandler}>
            {authorData.data.authors.map((author) => {
              return (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
