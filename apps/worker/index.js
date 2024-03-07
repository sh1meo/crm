import express from 'express';
import bodyParser from 'body-parser';
import workerRouterV1 from './routes/v1/index.js';

const application = express();

application.use(bodyParser.json({
	limit: '10mb',
}));

application.use('/api/v1', workerRouterV1);

// todo: env
const port = 3001;
application.listen(port, () => {
	console.log('started in port', port);
});