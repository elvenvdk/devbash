const express = require('express');
const bodyParser = require('body-parser');

const middlewares = require('./middleware');
const routes = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

// Middleware
app.use(middlewares);

module.exports = app;
