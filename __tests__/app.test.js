const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const tweets = require('../lib/pipeline/producer');
const { tweetData, store } = require('../lib/pipeline/tweet-worker');

describe('newz-flash routes', () => {
  console.log(tweets);
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'))
  });

  it('tweet-worker should do it\'s job', async() => {
    await tweetData(tweets);

    await store();

    const query = pool.query('SELECT * FROM tweets');

    expect(query).toEqual('something');
  });
});
