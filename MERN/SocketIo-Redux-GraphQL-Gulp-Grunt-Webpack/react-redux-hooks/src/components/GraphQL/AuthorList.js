import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../../GraphQLQueries/Query';
import { useEffect, useState } from 'react';

const AuthorList = () => {
  const { data } = useQuery(GET_AUTHORS);

  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    if (data) {
      setAuthors(data.authors);
    }
  });
  return (
    <div>
      <h2>Author List</h2>
      <table border="1 black solid">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Books</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => {
            return (
              <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.name}</td>
                <td>{author.age}</td>
                {author.books.map((book) => {
                  return <td key={book.id}>{book.name}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
