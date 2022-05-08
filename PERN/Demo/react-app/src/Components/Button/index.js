import React from 'react';
import Button from '@material-ui/core/Button';


const ButtonComponent = (props) => {
  const { variant, color, onClick, id, children } = props;
  return (
    <Button variant={variant} color={color} id={id} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
