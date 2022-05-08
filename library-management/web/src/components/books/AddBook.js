import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const history = useHistory();

  //   let user = JSON.parse(localStorage.getItem('user-info'));
  //   console.log(user);
  const token = localStorage.getItem('token');

  function logout() {
    localStorage.clear();
    history.push('/');
  }

  //api for adding a new vehicle
  const add = async () => {
    let userDetails = { name, genre, author };

    let result = await fetch('http://localhost:4000/books/add', {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    result = await result.json();
    // localStorage.setItem('user-info', JSON.stringify(result));
    history.push('/books');
  };

  return (
    <>
      <h1>Add New Book</h1>
      <br></br>
      <label>NAME: </label>
      <input type="text" name="type" onChange={(e) => setName(e.target.value)} />
      <br></br>
      <br></br>
      <label>GENRE: </label>
      <input type="text" name="number" onChange={(e) => setGenre(e.target.value)} />
      <br></br>
      <br></br>
      <label>AUTHOR: </label>
      <input type="text" name="country" onChange={(e) => setAuthor(e.target.value)} />
      <br></br>
      <br></br>
      <input type="submit" value="ADD" onClick={add} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default AddBook;
