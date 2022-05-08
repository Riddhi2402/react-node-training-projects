const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { createServer } = require('http');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { execute, subscribe } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
var cors = require('cors');
const PORT = 4000;
const app = new express();
const resolvers = require('./schema/resolver');
const typeDefs = require('./schema/typeDefs');
const mongoose = require('mongoose');

// connect to database
mongoose.connect(
  'mongodb://user:test@cluster1-shard-00-00.enjzx.mongodb.net:27017,cluster1-shard-00-01.enjzx.mongodb.net:27017,cluster1-shard-00-02.enjzx.mongodb.net:27017/GraphQLDatabase?ssl=true&replicaSet=atlas-eq0nr3-shard-0&authSource=admin&retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('conneted to database');
});

const schema = makeExecutableSchema({ resolvers, typeDefs });

app.use(cors());

app.use(
  '/graphql',
  express.json(),
  graphqlExpress({
    schema,
  })
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/graphql`,
  })
);
const ws = createServer(app);

ws.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`);
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema,
    },
    {
      server: ws,
      path: '/graphql',
    }
  );
});
