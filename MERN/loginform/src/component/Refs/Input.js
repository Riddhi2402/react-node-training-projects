import React from 'react';

const Input = ({ type, onKeyDown }, ref) => {
  return <input ref={ref} type={type} onKeyDown={onKeyDown} />;
};

const forwardedInput = React.forwardRef(Input);
export default forwardedInput;
