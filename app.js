const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.use('/api/tasks',require('./api/routes/tasks'));
//app.use('/api/users',require('.api/routes/users'));

module.exports = app;