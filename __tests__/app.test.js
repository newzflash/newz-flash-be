const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const tweets = require('../lib/pipeline/producer');
const Email = require('../lib/models/emails');
//const { tweetData, store } = require('../lib/pipeline/tweet-worker');

describe('newz-flash routes', () => {
  console.log(tweets);
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  

  it('should insert emails into the db', async() => {
    const email = await Email.insert({
      email: 'made up email'
    });
    const { rows } = await pool.query('SELECT * FROM emails WHERE ID = $1', [email.id]);

    expect(rows[0]).not.toBeUndefined();

  });

});
