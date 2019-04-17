const { Router } = require('express');
const bodyParser = require('body-parser');
const account = require('./account');
const users = require('./users');
const posts = require('./posts');

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use('/account', account);
router.use('/posts', posts);
router.use('/users', users);

module.exports = router;
