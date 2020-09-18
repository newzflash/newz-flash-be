const { 
  taskQueue,
  emailQueue
} = require('./queue');

taskQueue.process(5, `${__dirname}/tweet-worker.js`);
taskQueue.on('completed', job => {
  emailQueue.add(job.returnvalue);
});

emailQueue.process(5, `${__dirname}/email-Worker.js`);
