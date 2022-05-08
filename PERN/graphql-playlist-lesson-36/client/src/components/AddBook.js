import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

const AddBook = () => {
  const [book, setBook] = useState({
    name: '',
    genre: '',
    authorId: null,
  });

  const [addBook] = useMutation(addBookMutation);
  const authorData = useQuery(getAuthorsQuery);

  const displayAuthors = () => {
    if (authorData.loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return authorData.data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const changeHandler = (event) => {
    const newBook = { ...book };
    newBook[event.target.name] = event.target.value;
    setBook(newBook);
  };

  const submitForm = (event) => {
    event.preventDefault();
    addBook({
      variables: { name: book.name, genre: book.genre, authorId: book.authorId },
      refetchQueries: [{ query: getBooksQuery }],
    });
    event.target.reset();
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" name="name" onChange={changeHandler} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" name="genre" onChange={changeHandler} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="authorId" onChange={changeHandler}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
