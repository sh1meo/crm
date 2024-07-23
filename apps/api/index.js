import express from 'express';
import bodyParser from 'body-parser';
import apiRouterV1 from './routes/v1/index.js';
import db from '@db/index.js';

const application = express();

application.use(bodyParser.json({
	limit: '10mb',
}));

application.use('/api/v1', apiRouterV1);

// todo: env
const port = 3000;
application.listen(port, () => {
	console.log('started in port', port);
	try {
		db.sequelize.authenticate();
		db.sequelize.sync({ force: true });
	} catch (error) {
		console.dir(error, { depth: null });
		process.exit(1);
	}
});