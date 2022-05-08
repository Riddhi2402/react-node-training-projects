import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const BooksList = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const token = localStorage.getItem('token');

  const getData = async () => {
    let result = await fetch('http://localhost:4000/books', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    result = await result.json();
    setData(result);
  };

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <button onClick={logout}>Logout</button>
      <h1>List of Books</h1>
      <br></br>
      <br></br>
      <table align="center">
        <thead>
          <tr>
            <td>NAME</td>
            <td>GENRE</td>
            <td>AUTHOR</td>
          </tr>
        </thead>
        {data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.genre}</td>
            <td>{item.author}</td>
          </tr>
        ))}
      </table>
      <br />
      <br />
      <button onClick={history.push('/books/add')}>AddBook</button>
    </>
  );
};

export default BooksList;
