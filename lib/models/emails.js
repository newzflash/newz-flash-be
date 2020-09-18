const pool = require('../utils/pool');

class Email {
  id;
  email;

  constructor(row) {
    this.id = row.id;
    this.email = row.email;
  }
  
  static async insert(email) {
    const { rows } = await pool.query(
      'INSERT into emails (email) VALUES ($1) RETURNING *',
      [email]
    );
    return new Email(rows[0]);
  }
  
  static async find() {
    const { rows } = await pool.query(
      'SELECT * from emails',
    );
    return rows.map(row => new Email(row));
  }
  
  static async findbyId(id) {
    const { rows } = await pool.query(
      'SELECT * FROM emails WHERE id=$1',
      [id]
    );
  
    if(!rows[0]) return null;
    else return new Email(rows[0]);
  }
  
  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM emails WHERE id=$1 RETURNING *',
      [id]
    );
    return new Email(rows[0]);
  }
}

module.exports = Email;
