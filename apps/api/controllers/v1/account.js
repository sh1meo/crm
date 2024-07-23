import accountService from '@service/account.js';

class AccountController {
	constructor(accountService) {
		this.accountService = accountService;
	}
	
	createUser = async (req, res) => {
		const { title, domain } = req.body;
		const user = await this.accountService.createAccount(title, domain);
		console.log(user);
		res.json(user);
	};

	getUsers = async (req, res) => {
		const users = await this.accountService.getUsers();
		res.json(users);
	};
}

export default new AccountController(accountService);