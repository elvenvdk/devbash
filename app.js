const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

module.exports = app;
