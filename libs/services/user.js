import { errors } from '../constants/errors.js';

class UserService {
	constructor() {this.roles = ['admin', 'seller'];}
	checkUserRole (userRole) {
		if (!this.roles.includes(userRole)) {
			throw errors.user.UNKNOWN_USER_ROLE; //{ code: 400, description: 'Role must be admin or seller', error: 'UNKNOWN_USER_ROLE' }
		}
		if (userRole === 'admin') {
			return {
				read: true,
				write: true
			};
		}
		return { read: true, write: false };
	}
}

export default new UserService();