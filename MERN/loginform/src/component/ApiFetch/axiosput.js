import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text,Api } from '../../Assets/constant';

const AxiosPut = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.put(Api.putApi, {
        username: 'user9',
        password: 'pass9'
      })
      .then((response) => {
      }, (error) => {
        setError(error);
      });
  });

  if (error) {
    return <h3>{error.message}</h3>;
  } else {
    return (
      <h1>{Text.updateMessage}</h1>
    );
  }
};

export default AxiosPut;
