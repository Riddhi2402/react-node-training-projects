import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import BookList from './Components/GraphQL/BookList';
import AddBook from './Components/GraphQL/AddBook';
import UpdateBook from './Components/GraphQL/UpdateBook';

//Apollo client setup
const link = new HttpLink({ uri: 'http://localhost:5000/graphql' });
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache,
});

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ApolloProvider client={client}>
          <Route exact path="/" component={BookList} />
          <Route path="/addbook" component={AddBook} />
          <Route path="/updatebook/:id" component={UpdateBook} />
        </ApolloProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
