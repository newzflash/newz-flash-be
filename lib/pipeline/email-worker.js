const sendMail = require('../utils/email');
const { tweets } = require('./producer');


module.exports = job => {
  
  const { email } = job.data;

  return sendMail(
    email,
    'Try not to let this bum you out too bad, but here are your news tweets!',
    `${tweets}`
  );
};
