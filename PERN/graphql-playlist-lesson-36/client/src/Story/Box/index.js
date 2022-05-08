import React from 'react';
import './style.css';

const Box = (props) => {
  const { children, variant } = props;
  return (
    <ul>
      <li className={`book-list ${variant}`} {...props}>
        {children}
      </li>
    </ul>
  );
};

export default Box;
