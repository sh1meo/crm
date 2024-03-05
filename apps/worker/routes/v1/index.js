import Router from 'express';

const workerRouter = Router();

workerRouter.get('/', async (req, res) => {
	res.status(200).json({ message: 'OK from worker' });
});

export default workerRouter;