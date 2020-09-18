const Twit = require('twit');
const { taskQueue, emailQueue } = require('./queue');

const T = new Twit({
  consumer_key: '0rR4ImG45qRLdJTBSaybjtHZm',
  consumer_secret: 'PkagBYPaHjuQVsAIVnSnMCHIoN2E2B6NiVfb9zeiTjObGXlQtp',
  access_token: '1167987584967905281-g1owiFV3WHBG3I3RMh3e9t70BmygzZ',
  access_token_secret: 'ojkx3WIevkEvBDoCjiE4LTFBf6qLZ3e7zRXTF2bgzlcz5',
  timeout_ms: 60 * 1000,
  strictSSL: true
});

const tweets = T.get('statuses/user_timeline', { screen_name: 'oregonian', count: 5 }, (err, data, response) => {  
  taskQueue.add({ tweets: data });
  
  
});

//we need to grab individual tweets from our response body
module.exports = tweets;
