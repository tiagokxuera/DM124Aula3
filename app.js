const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.use((request, response, next) => {
 response.status(200).json({
   message: 'It works baby!'
 });
});

module.exports = app;