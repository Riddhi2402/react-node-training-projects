import React from 'react';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, ApolloProvider, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

//Apollo client setup
const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });
//Subscription setup
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  // options: {
  //   reconnect: true,
  // },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          book: {
            read(_, { args, toReference }) {
              return toReference({
                __typename: 'Book',
                id: args.id,
              });
            },
          },
        },
      },
      // Book: {
      //   fields: {
      //     name: {
      //       read(existing) {
      //         // console.log('existing', existing.toUpperCase());
      //         // return existing.toUpperCase();
      //       },
      //     },
      //   },
      // },
    },
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <BookList />
        {/* <AddBook /> */}
      </div>
    </ApolloProvider>
  );
};

export default App;
