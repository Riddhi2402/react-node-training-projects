const { createServer } = require('http');
const express = require('express');
const { execute, subscribe } = require('graphql');
const { ApolloServer } = require('apollo-server-express');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const resolvers = require('./schema/resolver');
const typeDefs = require('./schema/typeDefs');
const mongoose = require('mongoose');

(async () => {
  // connect to database
  mongoose.connect(
    'mongodb://user:test@cluster1-shard-00-00.enjzx.mongodb.net:27017,cluster1-shard-00-01.enjzx.mongodb.net:27017,cluster1-shard-00-02.enjzx.mongodb.net:27017/GraphQLDatabase?ssl=true&replicaSet=atlas-eq0nr3-shard-0&authSource=admin&retryWrites=true&w=majority'
  );
  mongoose.connection.once('open', () => {
    console.log('conneted to database');
  });

  const PORT = 4000;
  const app = express();
  const httpServer = createServer(app);

  const schema = makeExecutableSchema({ resolvers, typeDefs });

  const server = new ApolloServer({
    schema,
  });
  await server.start();
  server.applyMiddleware({ app });

  SubscriptionServer.create({ schema, execute, subscribe }, { server: httpServer, path: server.graphqlPath });

  httpServer.listen(PORT, () => {
    console.log(`Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`);
  });
})();
