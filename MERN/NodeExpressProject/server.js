const library = require('./Libraries/library');
const express = library.express;
const bodyParser = library.bodyParser;
const db = require('./app/models');
const cors = require('cors');

const port = process.env.PORT;

const app = express();
app.use(cors());

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());

//Calling function for routing
require('./app/routes/user.routes')(app);

// simple route
app.get('/', (request, response) => {
  response.send('Welcome to Node App');
});

app.listen(port, () => {
  console.log('App is listening on port:' + port);
});

//database connection
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });
