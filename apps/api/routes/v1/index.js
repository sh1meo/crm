import Router from 'express';

const apiRouter = Router();

apiRouter.get('/', async (req, res) => {
  res.status(200).json({ message: 'OK from api' });
});

apiRouter.post('/', async (req, res) => {
  res.status(200).json({ message: 'OK from api' })
});

export default apiRouter;