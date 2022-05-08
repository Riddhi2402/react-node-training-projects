import BookList from './components/GraphQL/BookList';
import ClassComponent from './components/Redux/ClassComponent';
import FunctionComponent from './components/Redux/FunctionComponent';
import UserTable from './components/Redux/UserTable';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import AuthorList from './components/GraphQL/AuthorList';
import AddBook from './components/GraphQL/AddBook';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import UpdateBook from './components/GraphQL/UpdateBook';
import ChatRoomSocketIo from './components/SocketIo/ChatRoomSocketIo';
import HomePage from './components/HomePage';
import React from 'react';

//Apollo client setup
const link = new HttpLink({ uri: 'http://localhost:5000/graphql' });
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache,
});

//App component
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ApolloProvider client={client}>
          <Route exact path="/" component={HomePage} />
          <Route path="/booklist" component={BookList} />
          <Route path="/authorlist" component={AuthorList} />
          <Route path="/addbook" component={AddBook} />
          <Route path="/updatebook/:id" component={UpdateBook} />
        </ApolloProvider>
        <Route path="/socketio" component={ChatRoomSocketIo} />
        <Route path="/usertable" component={UserTable} />
        <Route path="/classcomponent" component={ClassComponent} />
        <Route path="/functioncomponent" component={FunctionComponent} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
