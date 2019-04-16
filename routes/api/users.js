const { Router } = require('express');
const pool = require('../../db');

const router = Router();

// Get all users
router.get('/', (request, response, next) => {
  pool.query(`SELECT * FROM users`, (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

// Get user based on id
router.get('/:id', (request, response, next) => {
  console.log(request.params.id);
  const { id } = request.params;
  pool.query(`SELECT * FROM users WHERE users.id = $1`, [id], (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

// Create user
router.post('/signup', (request, response, next) => {
  console.log(request.body);
  const {
    first_name,
    last_name,
    email,
    username,
    user_password,
    user_password2
  } = request.body;
  pool.query(
    `INSERT INTO users(
      first_name, 
      last_name, 
      email, 
      username, 
      user_password, 
      user_password2
      ) VALUES($1, $2, $3, $4, $5, $6)`,
    [first_name, last_name, email, username, user_password, user_password2],
    (err, res) => {
      if (err) return next(err);
      response.status(201).send({ msg: 'Successfully created' });
    }
  );
});

module.exports = router;
