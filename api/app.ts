import express,{Request,Response} from 'express'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cacheControl from 'express-cache-controller';

import index from './routes/index';
import users from './routes/users';

const  app = express();

app.use(
    cacheControl({
        noStore: true
    })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// TODO 
app.use('/', index);
app.use('/users', users);

app.use(function (req: Request, res: Response) {
    res.status(404).send('Sorsendry cansendt find that!');
});

app.use(function (err: Error, req: Request, res: Response) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;