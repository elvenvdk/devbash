const { Router } = require('express');
const bodyParser = require('body-parser');
const users = require('./users');

const router = Router();

router.use(bodyParser.json());
router.use('/users', users);

module.exports = router;
