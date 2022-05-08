var async = require('async');

var stack = [];

var functionOne = function(callback) {
    callback(null,'Result of functionOne');
}

var functionTwo = function(callback) {
    callback(null,'Result of functionTwo');
}

var functionThree = function(callback) {
    callback(null,'Result of functionThree');
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.parallel(stack,function(err,result){
    console.log(result);
});