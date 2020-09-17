const Twit = require('twit');

const T = new Twit({
  consumer_key: '0rR4ImG45qRLdJTBSaybjtHZm',
  consumer_secret: 'PkagBYPaHjuQVsAIVnSnMCHIoN2E2B6NiVfb9zeiTjObGXlQtp',
  access_token: '1167987584967905281-g1owiFV3WHBG3I3RMh3e9t70BmygzZ',
  access_token_secret: 'ojkx3WIevkEvBDoCjiE4LTFBf6qLZ3e7zRXTF2bgzlcz5',
  timeout_ms: 60 * 1000,
  strictSSL: true
});

// const please = T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, (err, data, response) => {
  
//   console.log(data);

// });


 
const stream = T.stream('statuses/filter', { track: 'portland news'  });
 
const thisStream = stream.on('tweet', (tweet) => {
  console.log(tweet);
});

// console.log(please);
