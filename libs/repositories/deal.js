class DealRepository {
  constructor(deal) {
    this.model = deal;
  }
  async getAllDeals() {
    try {
      return await this.model.findAll();
    } catch (error) {
      console.error('Deals search error', error);
      return null;
    }
  }
  async getDealById(id) {
    try {
      return await this.model.findOne({where: {id}});
    } catch (error) {
      console.log('Error searching for a deal by id', error);
      return null;
    }
  }
  async addDeal(dealData) {
    try {
      //предполагается, что из service нам приходит уже готовый объект новой сделки
      return await this.model.create(dealData);
    } catch (error) {
      console.log('Deal creation error', error);
      return null;
    }
  }
  async updateDeal(id, updatedFields) {
    try {
      //предполагается, что в сервисе уже проверили наличие сделки по id и сформировали объект с полями, которые нужно изменить
      return await this.model.update(updatedFields, { where: { id } });
    } catch (error) {
      console.error('Deal updating error', error);
      return null;
    }
  }
  async deleteDeal(id){
    try {
      return await this.model.destroy({where: {id}});
    } catch (error) {
      console.log('Error on deleting a deal', error);
      return null;
    }
  }
}