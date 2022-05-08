const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./GraphQLSchema/Schema');

const port = 5000;

const app = express();
app.use(cors());

app.use(express.json()) // To parse the incoming requests with JSON payloads

//graphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
  })
);

app.listen(port, () => console.log('app start on port' + port));


