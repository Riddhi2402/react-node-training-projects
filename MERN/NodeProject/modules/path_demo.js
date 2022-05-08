const path = require('path');

//basename
console.log(path.basename(__filename));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//Create Path object
console.log(path.parse(__filename));
