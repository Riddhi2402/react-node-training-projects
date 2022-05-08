import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const isAuthenticate = true;
  return <Route render={() => (isAuthenticate ? props.children : <Redirect to={'/'} />)} />;
};

export default PrivateRoute;
