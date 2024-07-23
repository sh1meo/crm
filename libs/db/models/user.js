export default (sequelize, DataTypes) => {
	const table = sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
	}, {
		underscored: true,
	});
	return table;
};
