const fs = require('fs');
const filePath = require('../Constants/constant').FILE_PATH();

async function display(){
    const myPromice = new Promise(function(myResolve,myReject){
    setTimeout(function(){myResolve("finished");},3000);
    });
    console.log(await myPromice);
    console.log("complete")
}
try{
    display();
}catch(err){
    console.log(err);
}