import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, ADD_BOOK_MUTATION, GET_BOOKS } from '../../GraphQLQueries/Query';
import { useState} from 'react';
import { useHistory } from 'react-router-dom';

const AddBook = () => {
  let history = useHistory();
  const authorData= useQuery(GET_AUTHORS);
  const [book, setBook] = useState({
    name: '',
    genre: '',
    authorId: 1,
  });
  const [addBook, {}] = useMutation(ADD_BOOK_MUTATION);

  const changeHandler = (event) => {
    const newBook = { ...book };
    newBook[event.target.name] = event.target.value;
    setBook(newBook);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addBook({
      variables: { name: book.name, genre: book.genre, authorId: book.authorId },
      refetchQueries: [{ query: GET_BOOKS },{ query: GET_AUTHORS }],
    });
    history.push('/booklist');
  };

  if (authorData.loading) return 'Loading...';
  return (
    <div>
      <h2>Add Book Form</h2>
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
