var async = require('async');

// create a queue object with concurrency 2
var taskQueue = async.queue(function(task,callback){
    console.log('Hello' + task.name);
    callback();
},2);

//The drain function is called after the last task of the queue.
taskQueue.drain = function() {
    console.log('All items have been processed');
  };

// add some items to the queue
    taskQueue.push({name: 'foo'}, function(err) {
    console.log('Finished processing foo');
  });
  
    taskQueue.push({name: 'bar'}, function (err) {
    console.log('Finished processing bar');
  });
  
  // add some items to the queue (batch-wise)
    taskQueue.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
    console.log('Finished processing item');
  });

  // add some items to the front of the queue
    taskQueue.unshift({name: 'bar'}, function (err) {
    console.log('Finished processing bar');
  });