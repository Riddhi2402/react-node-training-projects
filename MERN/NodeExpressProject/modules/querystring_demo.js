const querystring = require('querystring');
const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Parse the whole URL
let parsed_Url = url.parse(myUrl.toString());

// Parse only querystring.
let parsed_queryString = querystring.parse(parsed_Url.query);
console.log("This is parsed URL :",parsed_Url);
console.log("This is parsed Query String :",parsed_queryString);
