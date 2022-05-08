const express = require('express');
const cors = require('cors');
const db = require('./models');

const bookRouter = require('./routes/book.routes');
const userRouter = require('./routes/user.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (request, response) => {
  response.json({ message: 'Welcome to Node App' });
});

//router
app.use('/books', bookRouter);
app.use('/users', userRouter);

// database connection
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

// set port, listen for requests
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
