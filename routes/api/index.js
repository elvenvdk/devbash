const { Router } = require('express');
const bodyParser = require('body-parser');
const users = require('./users');
const posts = require('./posts');

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use('/users', users);
router.use('/posts', posts);

module.exports = router;
