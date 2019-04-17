const { Router } = require('express');
const AccountTable = require('../../app/account/table');
const { hash } = require('../../app/account/helper');
const { setSession } = require('./helper');

const router = Router();

router.post('/signup', (request, response, next) => {
  const { username, password } = request.body;
  const usernameHash = hash(username);
  const passwordHash = hash(password);

  AccountTable.getAccount({ usernameHash })
    .then(({ account }) => {
      if (!account) {
        return AccountTable.storeAccount({
          usernameHash,
          passwordHash
        });
      } else {
        const error = new Error('This username has already been taken');
        error.statusCode = 409;
        throw error;
      }
    })
    .then(() => setSession({ username, response }))
    .then(({ message }) => {
      response.json(message);
    })
    .catch(error => next(error));
});

router.post('/login', (request, response, next) => {
  const { username, password } = request.body;
  console.log(`username: ${username} password ${password}`);

  AccountTable.getAccount({
    usernameHash: hash(username)
  })
    .then(({ account }) => {
      console.log(`account: ${account}`);
      if (account && account.password_hash === hash(password))
        return setSession({ username, response });
      else {
        const error = new Error('Incorrect username/password');
        error.statusCode = 409;

        throw error;
      }
    })
    .then(({ message }) => response.json({ message }))
    .catch(error => next(error));
});

module.exports = router;
