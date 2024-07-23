export default (sequelize, DataTypes) => {
	const table = sequelize.define('account', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		domain: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
	});
	return table;
};
