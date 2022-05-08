import React, { useState, useEffect } from 'react';
import { Text,Api } from '../../Assets/constant';

const Demo = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(Api.demoApi)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <h1>{error.message}</h1>;
  } else if (!isLoaded) {
    return <h1>{Text.loadMessage}</h1>;
  } else {
    return <h1>{items.disclaimer}</h1>;
  }
};

export default Demo;
