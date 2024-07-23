import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	res.send('get deals');
});

router.get('/:id', async (req, res) => {
	res.send('get deal by id');
});

router.post('/', async (req, res) => {
	res.send('create deal');
});

router.patch('/:id', async (req, res) => {
	res.send('update deal');
});

export default router;