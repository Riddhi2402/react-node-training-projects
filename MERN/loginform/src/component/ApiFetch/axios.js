import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text , Api} from '../../Assets/constant';

const AxiosFetchApi = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(Api.demoApi).then(
      (result) => {
        setIsLoaded(true);
        setItems(result.data);
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
    return <h1>{Text.loadMessage}</h1>;
  } else {
    return <h1>{items.disclaimer}</h1>;
  }
};

export default AxiosFetchApi;
