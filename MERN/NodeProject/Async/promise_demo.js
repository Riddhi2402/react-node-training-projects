const Promise = require('bluebird');
const fs = require('fs');
const filePath = require('../Constants/constant').FILE_PATH();

//using bluebird promise library

Promise.promisifyAll(fs);

fs.readFileAsync(filePath.helloworld,'utf8').then((data)=>{
    data += '\nAppended from PromiseDemo';
    fs.writeFileAsync(filePath.helloworld,data);
}).then(() => {
    console.log('file appended');
}).catch((err) => {
    console.log(err);
});



//using callback
/*
fs.readFile(filePath.helloworld,'utf8',(data)=>{
    data += '\nAppended from PromiseDemo';
    fs.writeFile(filePath.helloworld,data,() => {
        console.log('file appended');
    });
});
*/