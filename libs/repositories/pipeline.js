class PipelineRepository {
	constructor(pipeline) {
		this.model = pipeline;
	}
	async getAllPipelines() {
		try {
			return await this.model.findAll();
		} catch (error) {
			console.error('Pipelines search error', error);
			return null;
		}
	}
	async getPipelineById(id) {
		try {
			return await this.model.findOne({ where: { id } });
		} catch (error) {
			console.log('Error searching for a pipeline by id', error);
			return null;
		}
	}
	async addPipeline(pipelineData) {
		try {
			//предполагается, что из service нам приходит уже готовый объект новой воронки
			return await this.model.create(pipelineData);
		} catch (error) {
			console.log('Pipeline creation error', error);
			return null;
		}
	}
	async updatePipeline(id, updatedFields) {
		try {
			//предполагается, что в сервисе уже проверили наличие воронки по id и сформировали объект с полями, которые нужно изменить
			return await this.model.update(updatedFields, { where: { id } });
		} catch (error) {
			console.error('Pipeline updating error', error);
			return null;
		}
	}
	async deletePipeline(id) {
		try {
			return await this.model.destroy({ where: { id } });
		} catch (error) {
			console.log('Error on deleting a pipeline', error);
			return null;
		}
	}
}
//TODO: нужно создавать и экспортировать экземпляр класса, а не класс. Переделать, когда будет модель готова
export default PipelineRepository;