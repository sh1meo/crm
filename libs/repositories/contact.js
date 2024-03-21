class ContactRepository {
	constructor(contact) {
		this.model = contact;
	}
	async getAllContacts() {
		try {
			return await this.model.findAll();
		} catch (error) {
			console.error('Contacts search error', error);
			return null;
		}
	}
	async getContactById(id) {
		try {
			return await this.model.findOne({ where: { id } });
		} catch (error) {
			console.log('Error searching for a contact by id', error);
			return null;
		}
	}
	async addContact(contactData) {
		try {
			//предполагается, что из service нам приходит уже готовый объект нового контакта
			return await this.model.create(contactData);
		} catch (error) {
			console.log('Contact creation error', error);
			return null;
		}
	}
	async updateContact(id, updatedFields) {
		try {
			//предполагается, что в сервисе уже проверили наличие контакта по id и сформировали объект с полями, которые нужно изменить
			return await this.model.update(updatedFields, { where: { id } });
		} catch (error) {
			console.error('Contact updating error', error);
			return null;
		}
	}
	async deleteContact(id) {
		try {
			return await this.model.destroy({ where: { id } });
		} catch (error) {
			console.log('Error on deleting a contact', error);
			return null;
		}
	}
}
//TODO: нужно создавать и экспортировать экземпляр класса, а не класс. Переделать, когда будет модель готова
export default ContactRepository;