const http = require('http');

const server = http.createServer((request,response) => {
    response.write('Welcome to ');
    response.end();
})

const PORT = process.env.PORT || 5000;

server.listen(PORT,() => console.log('server is running...'));