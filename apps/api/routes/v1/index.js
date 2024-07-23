import { Router } from 'express';
import user from '../../../../libs/services/user.js';
const router = Router();
import accountRouter from './account.js';
import userRouter from './user.js';
import contactRouter from './contact.js';
import dealRouter from './deal.js';
import pipelineRouter from './pipeline.js';
import stageRouter from './stage.js';

router.use('/account', accountRouter);
router.use('/user', userRouter);
router.use('/contact', contactRouter);
router.use('/deal', dealRouter);
router.use('/pipeline', pipelineRouter);
router.use('/stage', stageRouter);

router.get('/', async (req, res) => {
	res.status(200).json({ message: 'OK from api' });
});

router.post('/check_user_rights', async (req, res) => {
	const body = req.body;
	try {
		const rights = user.checkUserRole(body.role);
		res.status(200).json(rights);
	}	catch (error) {
		res.status(error.code).json(error);
	}
	
});

export default router;