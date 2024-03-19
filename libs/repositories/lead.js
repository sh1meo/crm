class LeadRepository {
  constructor(lead) {
    this.model = lead;
  }
  async getAllLeads() {
    try {
      return await this.model.findAll();
    } catch (error) {
      console.error('Leads search error', error);
      return null;
    }
  }
  async getLeadById(id) {
    try {
      return await this.model.findOne({where: {id}});
    } catch (error) {
      console.log('Error searching for a lead by id', error);
      return null;
    }
  }
  async addLead(leadData) {
    try {
      //предполагается, что из service нам приходит уже готовый объект нового лида
      return await this.model.create(leadData);
    } catch (error) {
      console.log('Lead creation error', error);
      return null;
    }
  }
  async updateLead(id, updatedFields) {
    try {
      //предполагается, что в сервисе уже проверили наличие лида по id и сформировали объект с полями, которые нужно изменить
      return await this.model.update(updatedFields, { where: { id } });
    } catch (error) {
      console.error('Lead updating error', error);
      return null;
    }
  }
  async deleteLead(id){
    try {
      return await this.model.destroy({where: {id}});
    } catch (error) {
      console.log('Error on deleting a lead', error);
      return null;
    }
  }
}