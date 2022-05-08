import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditForm from '../EditForm/EditForm';
import SearchBar from '../ShowUser/Searchbar';
import UserForm from '../UserForm/UserForm';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={SearchBar} />
      <Route path="/createuser" component={UserForm} />
      <Route path="/updateuser/:id" component={EditForm} />
    </Switch>
  );
};

export default App;
