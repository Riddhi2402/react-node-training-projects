import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, Api, Token } from '../../Assets/constant';

const AxiosGet = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(Api.getApi, {
        headers: {
          Authorization: Token.authoriationToken,
        },
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result.data.users);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  });

  if (error) {
    return <h3>{error.message}</h3>;
  } else if (!isLoaded) {
    return <h1>{Text.load}</h1>;
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

export default AxiosGet;
