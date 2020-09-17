const { static } = require('express');
const pool = require('../utils/pool');

class Tweet {
  id;
  username;
  content;
  hashtag;
  date
}

constructor(row) {
  this.id = row.id;
  this.username = row.username;
  this.content = row.content;
  this.hashtag = row.hashtag;
  this.date = row.date
}

static async insert(tweet) {
  const { rows } = await.pool.query(
    'INSERT into tweets (username, content, hashtag, date) VALUES ($1, $2, $3, $4) RETURNING *',
    [tweet.username, tweet.content, tweet.hashtag, tweet.date]
  );
  return new Tweet(rows[0]);
};

static async find() {
  const { rows } = await pool.query(
    'SELECT * from tweets',
  );
  return rows.map(row => new Tweet(row));
}

static async findbyId(id) {
  const { rows } = await pool.query(
    'SELECT * FROM tweets WHERE id=$1',
    [id]
  );

  if (!rows[0]) return null;
  else return new Tweet(rows[0]);
}

static async delete(id) {
  const { rows } = await pool.query(
    'DELETE FROM tweets WHERE id=$1 RETURNING *',
    [id]
  );
  return new Tweet(rows[0]);
}

module.exports = Tweet;
