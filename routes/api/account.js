const { Router } = require('express');
const pool = require('../../db');
const AccountTable = require('../../app/account/table');

const router = Router();

router.post('/signup', (request, response, next) => {
  const { username, password } = request.body;

  AccountTable.storeAccount({ username, password })
    .then(() => response.json({ message: 'success...' }))
    .catch(error => next(error));
});

module.exports = router;
