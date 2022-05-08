const fs = require('fs');
const path = require('path');

//create Folder
/*
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log("Folder Created");
});
*/
//Create file

/*
fs.writeFile(path.join(__dirname,'/test','hello.txt'),"HelloWorld",err => {
    if(err) throw err;
    console.log("File Written...");

    //append file
    fs.appendFile(path.join(__dirname,'/test','hello.txt'),"New content is append",err => {
        if(err) throw err;
        console.log("File Written...");
    })
})
*/

//read file
/*
fs.readFile(path.join(__dirname, '/test','hello.txt'),'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
});
*/
fs.rename(path.join(__dirname, '/test','hello.txt'),path.join(__dirname, '/test','helloworld.txt') , err => {
    if(err) throw err;
    console.log("File Renamed");
})