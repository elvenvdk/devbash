const { Router } = require('express');
const pool = require('../../db');

const router = Router();

router.get('/test', (request, response, next) => {
  response.json('posts works...');
});

// Get all posts

module.exports = router;
