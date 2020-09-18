module.exports = async(job) => {
  return await job.data.map(tweet => {
    return {
      username: tweet.user.name,
      content: tweet.text, 
      hashtag: tweet.entities.hashtags, 
      date: tweet.created_at
    };
  });
};




