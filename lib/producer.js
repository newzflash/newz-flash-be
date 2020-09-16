const Twit = require('twit');

const T = new Twit({
  consumer_key: '2gC4nzEGtVqhdseJ94Sjgoq3t',
  consumer_secret: 'muWZB48Ys1BG69bMLvSpzpmQx5ysbz1JPnVKoMbzbQ7t0KGxg',
  app_only_auth: true
  
});

const please = T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, (err, data, response) => {
  
  console.log(data);

});


 
const stream = T.stream('statuses/filter', { track: 'mango' });
 
const thisStream = stream.on('tweet', (tweet) => {
  console.log(tweet);
});

console.log(please);
