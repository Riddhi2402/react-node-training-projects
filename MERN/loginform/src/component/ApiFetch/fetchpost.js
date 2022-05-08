import React, { useState, useEffect } from 'react';
import { Api, Text } from '../../Assets/constant';

const FetchPost = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'user12',
        password: 'pass12',
      }),
    };
    fetch(Api.postApi, options)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <h3>{error.message}</h3>;
  } else {
    return <h1>{Text.postMessage}</h1>;
  }
};

export default FetchPost;
