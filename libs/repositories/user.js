class UserRepository {
  constructor(user) {
    this.model = user;
  }
  async getAllUsers() {
    try {
      return await this.model.findAll();
    } catch (error) {
      console.error('Users search error', error);
      return null;
    }
  }
  async getUserById(id) {
    try {
      return await this.model.findOne({where: {id}});
    } catch (error) {
      console.log('Error searching for a user by id', error);
      return null;
    }
  }
  async addUser(userData) {
    try {
      //предполагается, что из service нам приходит уже готовый объект нового юзера
      return await this.model.create(userData);
    } catch (error) {
      console.log('User creation error', error);
      return null;
    }
  }
  async updateUser(id, updatedFields) {
    try {
      //предполагается, что в сервисе уже проверили наличие юзера по id и сформировали объект с полями, которые нужно изменить
      return await this.model.update(updatedFields, { where: { id } });
    } catch (error) {
      console.error('User updating error', error);
      return null;
    }
  }
  async deleteUser(id){
    try {
      return await this.model.destroy({where: {id}});
    } catch (error) {
      console.log('Error on deleting a user', error);
      return null;
    }
  }
}