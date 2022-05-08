const http = require('http');
const path = require('path');
const fs = require('fs');
const filePath = require('./Constants/constant').FILE_PATH();



//create server
const server = http.createServer((request,response) => {
    
    //build filepath dynamically
    let filePath = path.join(
        __dirname,
        'public',
        request.url === '/' ? 'index.html' : `${request.url}.html`
        );

    console.log(filePath);
    console.log(request.url);
    //Extension of file
    let extname = path.extname(filePath);

    //Initial content type
    let contentType = 'text/html';

    //check ext and set contenttype
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;  
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'text/png';
            break; 
        case '.jpg':
            contentType = 'text/jpg';
            break;                
    }
    
    fs.readFile(filePath,(err,content) => {
        if(err){
            if(err.code == 'ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content) =>{
                    response.writeHead(200,{'Content-Type': 'text/html' });
                    response.end(content,'utf8');  
                })
            }else{
                response.writeHead(500);
                response.end(`server error: ${err.code}`);
            }
        }else{
            response.writeHead(200,{'Content-Type': contentType });
            response.end(content);
        }
        
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,() => console.log('server is running...'));