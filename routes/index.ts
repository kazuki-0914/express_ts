import express from 'express'
const router = express.Router();

/* GET home page. */
router.get('/', function(req:any, res:any, next:any) {
  // res.render('index', { title: 'Express' });
  // throw new Error('BROKEN')
  res.send('hello22')
});

module.exports = router;
