import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	res.send('get contacts');
});

router.get('/:id', async (req, res) => {
	res.send('get contact by id');
});

router.post('/', async (req, res) => {
	res.send('create contact');
});

router.patch('/:id', async (req, res) => {
	res.send('update contact');
});

export default router;