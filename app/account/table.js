const pool = require('../../db');

class AccountTable {
  static storeAccount({ usernameHash, passwordHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO account(username_hash, password_hash) VALUES($1, $2)',
        [usernameHash, passwordHash],
        (error, response) => {
          if (error) reject(error);
          resolve();
        }
      );
    });
  }

  static getAccount({ usernameHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT id, username_hash, password_hash, session_id FROM account WHERE username_hash = $1`,
        [usernameHash],
        (error, response) => {
          if (error) reject(error);
          resolve({ account: response.rows[0] });
        }
      );
    });
  }

  static updateSessionId({ sessionId, usernameHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE account SET session_id = $1 WHERE username_hash = $2`,
        [sessionId, usernameHash],
        (error, response) => {
          if (error) reject(error);
          resolve();
        }
      );
    });
  }
}

module.exports = AccountTable;
