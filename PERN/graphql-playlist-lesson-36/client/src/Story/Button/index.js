import React from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const ButtonComponent = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props}>{props.children}</Button>
    </ThemeProvider>
  );
};

export default ButtonComponent;
