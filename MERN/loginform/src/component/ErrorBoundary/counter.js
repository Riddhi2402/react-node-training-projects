import React, { useState } from 'react';
import { Text } from '../../Assets/constant';

const Counter = () => {
  var [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count++);
  };
  if (count === 1) {
    throw new Error(Text.errorMessage);
  }
  return <h2 onClick={handleClick}>{count}</h2>;
};

export default Counter;
