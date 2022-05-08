import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text , Api} from '../../Assets/constant';

const AxiosDelete = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.delete(Api.deleteApi)
      .then((response) => {
        console.log(response);
      }, (error) => {
        setError(error);
      });
  });

  if (error) {
    return <h3>{error.message}</h3>;
  } else {
    return (
      <h1>{Text.deleteMessage}</h1>
    );
  }
};

export default AxiosDelete;
