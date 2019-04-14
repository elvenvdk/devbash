const { Router } = require('express');
const pool = require('../../db');

const router = Router();

router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM bashdb ORDER BY id ASC', (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

router.post('/', (request, response) => {
  pool.query('');
});

module.exports = router;
