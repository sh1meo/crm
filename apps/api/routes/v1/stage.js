import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	res.send('get stages');
});

router.get('/:id', async (req, res) => {
	res.send('get stage by id');
});

router.post('/', async (req, res) => {
	res.send('create stage');
});

router.patch('/:id', async (req, res) => {
	res.send('update stage');
});

export default router;