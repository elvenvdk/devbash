const { Router } = require('express');
const router = Router();

router.get('/test', (request, response) =>
  response.json({ msg: 'Users Works' })
);

module.exports = router;
