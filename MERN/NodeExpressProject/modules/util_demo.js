const util = require('util');

async function myFunction() {
  return 'hello world';
}
const callbackFunction = util.callbackify(myFunction);

callbackFunction((err, data) => {
  if (err) throw err;
  console.log(data);
});