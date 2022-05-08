import React from 'react';
import Typography from '@material-ui/core/Typography';

const HeaderComponent = (props) => {
  return <Typography {...props}>{props.children}</Typography>;
};

export default HeaderComponent;
