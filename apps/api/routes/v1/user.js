import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	res.send('get users');
});

router.get('/:id', async (req, res) => {
	res.send('get user by id');
});

router.post('/signUp', async (req, res) => {
	res.send('signUp user');
});

router.post('/signIn', async (req, res) => {
	res.send('signIn user');
});

router.patch('/:id', async (req, res) => {
	res.send('update user');
});

export default router;