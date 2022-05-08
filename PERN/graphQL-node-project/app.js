const express = require('express');
const cors = require('cors');
const database = require('./config/database');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');
require('dotenv').config();

const port = process.env.PORT;

const app = express();
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.json()) // To parse the incoming requests with JSON payloads

//graphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log('app start on port' + port));

//database connection
database
  .authenticate()
  .then(() => {
    console.log('Database Connected');
  })
  .catch((error) => console.log(error));
