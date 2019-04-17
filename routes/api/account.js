const { Router } = require('express');
const AccountTable = require('../../app/account/table');
const Session = require('../../app/account/session');
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

  AccountTable.getAccount({
    usernameHash: hash(username)
  })
    .then(({ account }) => {
      if (account && account.password_hash === hash(password)) {
        const { session_id } = account;
        return setSession({ username, response, session_id });
      } else {
        const error = new Error('Incorrect username/password');
        error.statusCode = 409;

        throw error;
      }
    })
    .then(({ message }) => response.json({ message }))
    .catch(error => next(error));
});

router.get('/logout', (request, response, next) => {
  const { username } = Session.parse(request.cookies.sessionString);

  AccountTable.updateSessionId({
    session_id: null,
    usernameHash: hash(username)
  })
    .then(() => {
      response.clearCookie('sessionString');
      response.json({ message: 'Successfully logged out' });
    })
    .catch(error => next(error));
});

module.exports = router;
