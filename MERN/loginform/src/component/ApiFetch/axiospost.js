import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, Api } from '../../Assets/constant';

const AxiosPost = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .post(Api.postApi, {
        username: 'user11',
        password: 'pass11',
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          setError(error);
        }
      );
  });

  if (error) {
    return <h3>{error.message}</h3>;
  } else {
    return <h1>{Text.postMessage}</h1>;
  }
};

export default AxiosPost;
