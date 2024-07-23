import { Router } from 'express';
import accountController from '../../controllers/v1/account.js';

const router = Router();

router.get('/', accountController.getUsers);

router.get('/:id', async (req, res) => {
	res.send('get account by id');
});

router.post('/', accountController.createUser);

router.patch('/:id', async (req, res) => {
	res.send('update contact');
});

export default router;