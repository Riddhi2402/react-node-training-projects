const http = require('http');

http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
      console.error(err);
      response.statusCode = 400;
    response.end();
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();

      response.on('error', (err) => {
        console.error(err);
      });

      response.writeHead(200,{'Content-Type': 'application/json' });

      const responseBody = { headers, method, url, body };

      response.write(JSON.stringify(responseBody));

    response.end();

    });
  }).listen(8080);