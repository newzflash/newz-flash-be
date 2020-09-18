const sendMail = require('../utils/email');
const Email = require('../models/emails');


module.exports = job => {
  
  const { tweets } = job.data;
  Email.find(job.id);
  return sendMail(
    email,
    'Try not to let this bum you out too bad, but here are your news tweets!',
    `${tweets}`
  );
};
