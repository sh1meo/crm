import db from '@db/index.js';

class AccountService {
	constructor(accountModel) {
		this.accountModel = accountModel;
	}
	async createAccount(title, domain) {
		console.log(title, domain);
		try {
			const account = await this.accountModel.create({ title, domain });
			return account.dataValues;
		} catch (error) {
			console.dir({ handler: 'createAccount', error }, { depth: null });
			throw new Error('unexpected create account error');
		}
	}

	async getUsers() {
		return this.accountModel.findAll();
	}
}

export default new AccountService(db.accountModel);