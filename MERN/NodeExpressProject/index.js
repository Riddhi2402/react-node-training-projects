const filePath = require('./Constants/constant').FILE_PATH();
const library = require(filePath.library);
const express = library.express;
const app = express();
const port = process.env.PORT;
var router = require(filePath.expressroute);

//Route handler
app.use('/',router);


app.listen(port,() => {
    console.log(`app listening on port ${port}`);
})