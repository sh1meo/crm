export default (sequelize, DataTypes) => {
	const table = sequelize.define('deal', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		responsibleUserId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		contacts: {
			type: DataTypes.ARRAY(DataTypes.INTEGER),
			allowNull: false,
			defaultValue: [],
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		pipelineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		stageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		underscored: true,
	});
	return table;
};
