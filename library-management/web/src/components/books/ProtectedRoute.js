import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const token = localStorage.getItem('token');
  console.log('this', token);

  return <Route {...props} render={(props) => (token ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export default ProtectedRoute;
