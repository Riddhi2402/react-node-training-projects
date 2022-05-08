const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to database
mongoose.connect(
  'mongodb://user:test@cluster1-shard-00-00.enjzx.mongodb.net:27017,cluster1-shard-00-01.enjzx.mongodb.net:27017,cluster1-shard-00-02.enjzx.mongodb.net:27017/GraphQLDatabase?ssl=true&replicaSet=atlas-eq0nr3-shard-0&authSource=admin&retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('conneted to database');
});

// bind express with graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
