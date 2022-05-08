var async = require('async');

var stack = [];

var functionOne = function(callback) {
    var result = 'Result of functionOne\n';
    callback(null,result);
}

var functionTwo = function(result,callback) {
    result += 'Result of functionTwo\n';
    callback(null,result);
}

var functionThree = function(result,callback) {
    result += 'Result of functionThree';
    callback(null,result);
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.waterfall(stack,function(err,result){
    console.log(result);
});