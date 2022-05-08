const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

console.log(myUrl.href);

console.log(myUrl.toString());

console.log(myUrl.host);

console.log(myUrl.hostname);

console.log(myUrl.pathname);

console.log(myUrl.search);

console.log(myUrl.searchParams);

//Add Param
myUrl.searchParams.append('abc','123');

//Loop throw param
myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));

