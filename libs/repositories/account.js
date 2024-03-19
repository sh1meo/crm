class AccountRepository {
  constructor(account) {
    this.model = account;
  }
  async getAllAccounts() {
    try {
      return await this.model.findAll();
    } catch (error) {
      console.error('Accounts search error', error);
      return null;
    }
  }
  async getAccountById(id) {
    try {
      return await this.model.findOne({where: {id}});
    } catch (error) {
      console.log('Error searching for a account by id', error);
      return null;
    }
  }
  async addAccount(accountData) {
    try {
      //предполагается, что из service нам приходит уже готовый объект нового аккаунта
      return await this.model.create(accountData);
    } catch (error) {
      console.log('Account creation error', error);
      return null;
    }
  }
  async updateAccount(id, updatedFields) {
    try {
      //предполагается, что в сервисе уже проверили наличие аккаунта по id и сформировали объект с полями, которые нужно изменить
      return await this.model.update(updatedFields, { where: { id } });
    } catch (error) {
      console.error('Account updating error', error);
      return null;
    }
  }
  async deleteAccount(id){
    try {
      return await this.model.destroy({where: {id}});
    } catch (error) {
      console.log('Error on deleting a account', error);
      return null;
    }
  }
}