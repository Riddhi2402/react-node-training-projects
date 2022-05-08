import React from 'react';
import { Dialog } from '@mui/material';

const DialogBox = (props) => {
  return <Dialog {...props}>{props.children}</Dialog>;
};

export default DialogBox;
