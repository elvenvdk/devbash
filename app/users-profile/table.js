const pool = require('../../db');

class UsersProfileTable {
  static getProfiles() {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT avatar, username, user_city, user_state FROM users_profile',
        (error, res) => {
          if (error) reject(error);
          resolve();
        }
      );
    });
  }

  static getProfile({ usernameHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT avater, username, user_city, user_state
                  FROM users_profile
                  WHERE usernameHash = $1`,
        [usernameHash],
        (error, res) => {
          if (error) reject(error);
          resolve(res.rows[0]);
        }
      );
    });
  }

  // static insert()

  static update({ usernameHash }, field, reqBody) {
    return new Promise((resolve, reject) => {
      pool.query(
        `
        UPDATE users_profile SET ${field} = ($1) WHERE usernameHash = ($2)
      `,
        [reqBody[field], usernameHash],
        (error, res) => {
          if (error) reject(error);
          resolve();
        }
      );
    });
  }
}

module.exports = UsersProfileTable;
