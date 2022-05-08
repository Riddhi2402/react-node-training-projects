const schedule = require('node-schedule');

//At recurrent intervals
// const job = schedule.scheduleJob('*/5 * * * * *', () => {
//   console.log('Job is running at every 5 second');
// });

//At Particular Date & Time
const date = new Date(2021, 8, 16, 10, 58, 0);
schedule.scheduleJob(date, () => {
  job.cancel();
});

//It will run after 5 seconds and stop after 10 seconds
const startTime = new Date(Date.now() + 5000);
const endTime = new Date(startTime.getTime() + 5000);
const job = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
  console.log('Hello');
});