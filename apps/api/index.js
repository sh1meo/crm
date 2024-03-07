import express from 'express';
import bodyParser from 'body-parser';
import apiRouterV1 from './routes/v1/index.js';

const application = express();

application.use(bodyParser.json({
	limit: '10mb',
}));

application.use('/api/v1', apiRouterV1);

// todo: env
const port = 3000;
application.listen(port, () => {
	console.log('started in port', port);
});