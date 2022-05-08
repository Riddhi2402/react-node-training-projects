import React, { useState, useEffect } from 'react';
import { Text, Api, Token } from '../../Assets/constant';

const FetchGet = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: Token.authoriationToken,
      },
    };
    fetch(Api.getApi, options)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result.users);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <h3>{error.message}</h3>;
  } else if (!isLoaded) {
    return <h1>{Text.loadMessage}</h1>;
  } else {
    return (
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username} {user.password}
          </li>
        ))}
      </ul>
    );
  }
};

export default FetchGet;
