const pool = require('../../db');

class AccountTable {
  static storeAccount({ username_hash, password_hash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO account(username_hash, password_hash) VALUES($1, $2)',
        [username_hash, password_hash],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }

  static getAccount({ username_hash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT id, password_hash FROM account WHERE username_hash = $1`,
        [username_hash],
        (error, response) => {
          if (error) reject(error);
          resolve({ account: response.rows[0] });
        }
      );
    });
  }
}

module.exports = AccountTable;
