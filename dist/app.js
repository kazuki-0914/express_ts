"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cacheControl = require('express-cache-controller');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = (0, express_1.default)();
app.use(cacheControl({
    noStore: true
}));
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(function (req, res, next) {
    res.status(404).send('Sorsendry cansendt find that!');
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
module.exports = app;
//# sourceMappingURL=app.js.map