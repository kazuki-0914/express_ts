import express,{Request,Response} from 'express'
const router = express.Router();

/* GET home page. */
router.get('/', function(req:Request, res:Response) {
    // res.render('index', { title: 'Express' });
    // throw new Error('BROKEN')
    res.send('hello22')
});

export default router;