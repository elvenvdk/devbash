const { Router } = require('expxress');
const bodyParser = require('body-parser');
const users = require('./users');

const router = Router();

router.use(bodyParser);
router.use('/users', users);
