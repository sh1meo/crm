import { Sequelize, DataTypes } from 'sequelize';
import accountModel from './models/account.js';
import userModel from './models/user.js';
import contactModel from './models/contact.js';
import dealModel from './models/deal.js';
import pipelineModel from './models/pipeline.js';
import stageModel from './models/stage.js';

const sequelize = new Sequelize('crm', 'crm', 'st4XmkpvBxq4', {
	host: 'localhost',
	port: '54320',
	dialect: 'postgres',
});

const db = {
	sequelize,
	Sequelize,
	userModel: userModel(sequelize, DataTypes),
	accountModel: accountModel(sequelize, DataTypes),
	contactModel: contactModel(sequelize, DataTypes),
	dealModel: dealModel(sequelize, DataTypes),
	pipelineModel: pipelineModel(sequelize, DataTypes),
	stageModel: stageModel(sequelize, DataTypes),
};

export default db;