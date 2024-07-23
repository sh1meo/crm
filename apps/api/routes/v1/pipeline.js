import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	res.send('get pipelines');
});

router.get('/:id', async (req, res) => {
	res.send('get pipeline by id');
});

router.post('/', async (req, res) => {
	res.send('create pipeline');
});

router.patch('/:id', async (req, res) => {
	res.send('update pipeline');
});

export default router;