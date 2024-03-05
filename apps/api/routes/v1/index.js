import Router from 'express';
import user from '../../../../libs/services/user';
const apiRouter = Router();

apiRouter.get('/', async (req, res) => {
	res.status(200).json({ message: 'OK from api' });
});

apiRouter.post('/check_user_rights', async (req, res) => {
	const body = req.body; // req = { body: { role: 'seller' } }
	try {
		const rights = user.checkUserRole(body.role);
		res.status(200).json(rights);
	}	catch (error) {
		res.status(error.code).json(error);
	}
	
});

export default apiRouter;