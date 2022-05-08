import React from 'react';
import { Select } from '@mui/material';

const SelectField = (props) => {
  return <Select {...props}>{props.children}</Select>;
};

export default SelectField;
