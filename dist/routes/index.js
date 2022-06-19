"use strict";
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    // throw new Error('BROKEN')
    res.send('hello');
});
module.exports = router;
//# sourceMappingURL=index.js.map