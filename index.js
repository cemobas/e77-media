import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import awsRoutes from './src/routes/awsRoutes';

const app = express();
const PORT = process.env.PORT || 8081;

// bodyparser setup: setting up json to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

awsRoutes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => 
    /** `text` instead of 'text', because `` is es6 syntax. This way we can inject a variable like PORT */
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);

