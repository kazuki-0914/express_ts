
import express from 'express'
// var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cacheControl = require('express-cache-controller');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app  = express();

app.use(cacheControl({
  noStore: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req:any, res:any, next:any) {
    res.status(404).send('Sorsendry cansendt find that!');
  });

  app.use(function(err:any, req:any, res:any, next:any) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  module.exports = app;