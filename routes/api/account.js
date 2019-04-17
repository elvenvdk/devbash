const { Router } = require('express');
const pool = require('../../db');
const AccountTable = require('../../app/account/table');
const { hash } = require('../../app/account/helper');

const router = Router();

router.post('/signup', (request, response, next) => {
  const { username, password } = request.body;
  const username_hash = hash(username);
  const password_hash = hash(password);

  AccountTable.getAccount({ username_hash })
    .then(({ account }) => {
      if (!account) {
        return AccountTable.storeAccount({
          username_hash,
          password_hash
        });
      } else {
        const error = new Error('This username has already been taken');
        error.statusCode = 409;
        throw error;
      }
    })
    .then(() => response.json({ message: 'success...' }))
    .catch(error => next(error));
});

module.exports = router;
