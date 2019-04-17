const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateSignupInput = data => {
  let errors = {};

  data.first_name = !isEmpty(data.first_name) ? data.first_name : '';
  data.last_name = !isEmpty(data.last_name) ? data.last_name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
};
