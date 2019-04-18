const { Router } = require('express');
const UsersProfileTable = require('../../app/users-profile/table');
const Session = require('./helper');
const AccountTable = require('../../app/account/table');

const router = Router();

router.post('/');

module.exports = router;
