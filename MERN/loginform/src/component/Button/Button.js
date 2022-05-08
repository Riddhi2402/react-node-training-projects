import React from 'react';
import './Button.css';

const Button = (props) => {
  const { variant = 'primary', children } = props;
  return <button className={`button ${variant}`}>{children}</button>;
};

export default Button;
