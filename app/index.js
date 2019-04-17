const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const middlewares = require('../middleware');
const routes = require('../routes/api');

const app = express();

app.use(cors({ origin: 'http://localhost:1234' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', routes);

// Middleware
app.use(middlewares);

module.exports = app;
