const http = require('http');
const fs = require('fs');
const filePath = require('./Constants/constant').FILE_PATH();

const port = 5000;
const hostname = '127.0.0.1';

const server = http.createServer((request,response) => {
    let htmlFile = '';

    switch(request.url){
        case '/':
			htmlFile = filePath.index;
			break;
		case '/about':
			htmlFile = filePath.about;
			break;
        default:
            break;    
    }

    if(htmlFile){
        render(response,htmlFile);
    }else{
        response.statusCode = 404;
        response.end();  
    }
    
});

const render = (response,htmlFile) => {
    fs.stat(`${htmlFile}`,(err,stats) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        if(stats){
            fs.createReadStream(htmlFile).pipe(response);
        }
    });
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });