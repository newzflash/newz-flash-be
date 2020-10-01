const Twit = require('twit');
const { taskQueue } = require('./queue');

const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET_KEY,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true
});

const tweets = T.get('statuses/user_timeline', { screen_name: 'oregonian', count: 5 }, (err, data, response) => {  
  taskQueue.add({ tweets: data });
  
  
  
});

//we need to grab individual tweets from our response body
module.exports = tweets;
