const Tweet = require('../models/emails');
//get job.data.tweets in the worker

const tweetData = async(job) => {
  return await job.data.map(tweet => {
    return {
      username: tweet.user.name,
      content: tweet.text, 
      hashtag: tweet.entities.hashtags, 
      date: tweet.created_at
    };
  });
};

// const store = () => {
//   return Promise.all(
//     tweetData.map(tweet => Tweet.insert(tweet))
//   );
// };

module.exports = {
  tweetData,
  store
};
