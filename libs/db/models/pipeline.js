export default (sequelize, DataTypes) => {
	const table = sequelize.define('pipeline', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
	});
	return table;
};
