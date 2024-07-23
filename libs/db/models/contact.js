export default (sequelize, DataTypes) => {
	const table = sequelize.define('contact', {
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
		deals: {
			type: DataTypes.ARRAY(DataTypes.INTEGER),
			allowNull: false,
			defaultValue: [],
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
	}, {
		underscored: true,
	});
	return table;
};
