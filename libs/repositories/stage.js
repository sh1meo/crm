class StageRepository {
	constructor(stage) {
		this.model = stage;
	}
	async getAllStages() {
		try {
			return await this.model.findAll();
		} catch (error) {
			console.error('Stages search error', error);
			return null;
		}
	}
	async getStageById(id) {
		try {
			return await this.model.findOne({ where: { id } });
		} catch (error) {
			console.log('Error searching for a stage by id', error);
			return null;
		}
	}
	async addStage(stageData) {
		try {
			//предполагается, что из service нам приходит уже готовый объект нового этапа
			return await this.model.create(stageData);
		} catch (error) {
			console.log('Stage creation error', error);
			return null;
		}
	}
	async updateStage(id, updatedFields) {
		try {
			//предполагается, что в сервисе уже проверили наличие этапа по id и сформировали объект с полями, которые нужно изменить
			return await this.model.update(updatedFields, { where: { id } });
		} catch (error) {
			console.error('Stage updating error', error);
			return null;
		}
	}
	async deleteStage(id) {
		try {
			return await this.model.destroy({ where: { id } });
		} catch (error) {
			console.log('Error on deleting a stage', error);
			return null;
		}
	}
}
module.exports = StageRepository;