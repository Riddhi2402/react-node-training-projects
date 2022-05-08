const text = require('./Util/constants');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./Config/db.config');
require('dotenv').config();

const port = process.env.PORT;

const app = express();
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Public Folder
app.use(express.static('./public'));

//routes
app.use('/app', require('./Routes/user.routes'));
app.listen(port, () => console.log(`${text.serverStartMessage} ${port}`));

//database connection
database
  .authenticate()
  .then(() => {
    console.log(`${text.databaseMessage}`);
  })
  .catch((error) => console.log(error));
