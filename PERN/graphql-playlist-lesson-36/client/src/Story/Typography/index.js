import { Typography } from '@mui/material';
import React from 'react';

const TextComponent = (props) => {
  return <Typography {...props}>{props.children}</Typography>;
};

export default TextComponent;
